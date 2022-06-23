import { Button, CircularProgress, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { TypeOf, object, string } from "zod";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { categoryService } from "@/services/category.service";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

interface IDrawerCategories {
  open: boolean;
  setOpen: (open: boolean) => void;
  action: string;
  updateData: () => void;
}

const registerSchema = object({
  name: string().nonempty("Campo obligatorio"),
});
type RegisterInput = TypeOf<typeof registerSchema>;

const DrawerCategories = ({
  open,
  setOpen,
  action,
  updateData,
}: IDrawerCategories) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    setLoading(true);
    categoryService
      .create(values)
      .then(() => {
        reset();
        updateData();
        setLoading(false);
        setOpen(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data) {
          throw Error(error);
        } else if (error.request) {
          throw Error(error.message);
        } else {
          throw Error(error);
        }
      });
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box
        className="flex flex-col px-8 py-8 bg-slate-100 h-full"
        sx={{ width: 500 }}
        role="presentation"
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="text-xl font-bold mb-16">
          {action === "crear" ? "Crear Categoría" : "Editar Categoría"}
        </div>
        <div className="mb-8">
          <TextField
            label="Nombre"
            type="name"
            fullWidth
            placeholder="Nombre"
            required
            error={!!errors["name"]}
            helperText={errors["name"] ? errors["name"].message : ""}
            {...register("name")}
          />
        </div>
        <div className="flex justify-between">
          <Button
            className="w-48 bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {loading && (
              <CircularProgress
                className={"text-white"}
                size={24}
                thickness={4}
              />
            )}
            {!loading && <span>Crear</span>}
          </Button>
          <Button
            className="w-48 bg-slate-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(false)}
          >
            <span>Cancelar</span>
          </Button>
        </div>
      </Box>
    </Drawer>
  );
};
export default DrawerCategories;
