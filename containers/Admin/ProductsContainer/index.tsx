import { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { productService } from "@/services/product.service";
import styles from "./ProductsContainer.module.css";
import { useDebouncedCallback } from "use-debounce";

interface IProductsContainer {
  itemSelected: string;
}

const ProductsContainer = ({ itemSelected }: IProductsContainer) => {
  const [products, setProducts] = useState<any[]>([]);
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
  console.log(
    "🚀 ~ file: index.tsx ~ line 20 ~ ProductsContainer ~ products",
    products
  );

  return (
    <div className={styles.ProductsContainer}>
      <div className="w-full pl-8 py-8">
        <h1 className="text-4xl font-bold">Lista de usuarios</h1>
      </div>
      <div className="w-full px-8">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User name</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="center">Activo</TableCell>
                <TableCell>Role</TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow
                  key={row.username}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.username}
                  </TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell align="center">{row.active}</TableCell>
                  <TableCell>admin</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ProductsContainer;
