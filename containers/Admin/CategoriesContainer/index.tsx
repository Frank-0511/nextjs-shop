import { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { categoryService } from "@/services/category.service";
import styles from "./CategoriesContainer.module.css";
import { useDebouncedCallback } from "use-debounce";

interface ICategoriesContainer {
  itemSelected: string;
}

const CategoriesContainer = ({ itemSelected }: ICategoriesContainer) => {
  const [categories, setCategories] = useState<any[]>([]);
  const fetchDataCategories = useDebouncedCallback(() => {
    categoryService.getCategories().then((response) => {
      setCategories(response.data);
    });
  }, 100);

  useEffect(() => {
    if (itemSelected === "categories") {
      fetchDataCategories();
    }
  }, [fetchDataCategories, itemSelected]);

  if (itemSelected !== "categories") return null;

  return (
    <div className={styles.CategoriesContainer}>
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
              {categories.map((row) => (
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

export default CategoriesContainer;
