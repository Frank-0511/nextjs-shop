import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import DrawerProducts from "./DrawerProducts";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { productService } from "@/services/product.service";
import styles from "./ProductsContainer.module.css";
import { useDebouncedCallback } from "use-debounce";

interface IProductsContainer {
  itemSelected: string;
}

const ProductsContainer = ({ itemSelected }: IProductsContainer) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [action, setAction] = useState("crear");
  const [products, setProducts] = useState<any[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const fetchDataProducts = useDebouncedCallback(() => {
    productService.getProducts().then((response) => {
      setProducts(response.data);
    });
  }, 100);

  useEffect(() => {
    if (itemSelected === "products") {
      fetchDataProducts();
    }
  }, [fetchDataProducts, itemSelected]);

  if (itemSelected !== "products") return null;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={styles.ProductsContainer}>
      <div className="w-full px-8 py-8 flex justify-between">
        <h1 className="text-4xl font-bold">Lista de productos</h1>
        <Button
          className="bg-slate-600 text-white hover:bg-slate-500"
          onClick={() => {
            setAction("crear");
            setOpenDrawer(true);
          }}
        >
          Crear Producto
        </Button>
      </div>
      <div className="w-full px-8">
        <Paper>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Detalle</TableCell>
                  <TableCell>Categoría</TableCell>
                  <TableCell>Marca</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="center">Imagen</TableCell>
                  <TableCell align="center">Activo</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.product_id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.details}</TableCell>
                      <TableCell>{row.name_category}</TableCell>
                      <TableCell>{row.brand}</TableCell>
                      <TableCell align="right">{`S/${row.price}`}</TableCell>
                      <TableCell>{row.product_image}</TableCell>
                      <TableCell align="center">{row.active}</TableCell>
                      <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <DrawerProducts
        open={openDrawer}
        setOpen={setOpenDrawer}
        action={action}
        updateData={fetchDataProducts}
      />
    </div>
  );
};

export default ProductsContainer;
