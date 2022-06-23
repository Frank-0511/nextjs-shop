import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import DrawerCategories from "./DrawerCategories";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { categoryService } from "@/services/category.service";
import { nanoid } from "nanoid";
import styles from "./CategoriesContainer.module.css";
import { useDebouncedCallback } from "use-debounce";

interface ICategoriesContainer {
  itemSelected: string;
}

const CategoriesContainer = ({ itemSelected }: ICategoriesContainer) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [action, setAction] = useState("crear");
  const [categories, setCategories] = useState<any[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const fetchDataCategories = useDebouncedCallback(() => {
    categoryService.getCategories().then((response) => {
      setCategories(response.data);
    });
  });

  useEffect(() => {
    if (itemSelected === "categories") {
      fetchDataCategories();
    }
  }, [fetchDataCategories, itemSelected]);

  if (itemSelected !== "categories") return null;

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
    <div className={styles.CategoriesContainer}>
      <div className="w-full px-8 py-8 flex justify-between">
        <h1 className="text-4xl font-bold">Lista de categorías</h1>
        <Button
          className="bg-slate-600 text-white hover:bg-slate-500"
          onClick={() => {
            setAction("crear");
            setOpenDrawer(true);
          }}
        >
          Crear Categoría
        </Button>
      </div>
      <div className="w-full px-8">
        <Paper>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Titulo</TableCell>
                  <TableCell>Descripción</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={`${nanoid() + row.id}`}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={categories.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <DrawerCategories
        open={openDrawer}
        setOpen={setOpenDrawer}
        action={action}
        updateData={fetchDataCategories}
      />
    </div>
  );
};

export default CategoriesContainer;
