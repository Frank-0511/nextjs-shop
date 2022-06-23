import {
  Button,
  CircularProgress,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { TypeOf, nan, number, object, string } from "zod";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { categoryService } from "@/services/category.service";
import { nanoid } from "nanoid";
import { productService } from "@/services/product.service";
import { useDebouncedCallback } from "use-debounce";
import { zodResolver } from "@hookform/resolvers/zod";

interface IDrawerProducts {
  open: boolean;
  setOpen: (open: boolean) => void;
  action: string;
  updateData: () => void;
}

const registerSchema = object({
  name: string().nonempty("Campo obligatorio").trim(),
  details: string().nonempty("Campo obligatorio").trim(),
  product_category_id: string().nonempty("Campo obligatorio"),
  brand: string().nonempty("Campo obligatorio").trim(),
  price: number({
    required_error: "Campo obligatorio",
    invalid_type_error: "Ingrese un precio correcto",
  })
    .or(string().regex(/\d+/, "Ingrese un precio correcto").transform(Number))
    .refine((n) => n >= 0, "Ingrese un precio correcto"),
  stock: number({
    required_error: "Campo obligatorio",
    invalid_type_error: "Ingrese un numero de stock correcto",
  })
    .or(
      string()
        .regex(/^\d+$/, "Ingrese un numero de stock correcto")
        .transform(Number)
    )
    .refine((n) => n >= 0, "Ingrese un numero de stock correcto"),
  product_image: string()
    .nonempty("Campo obligatorio")
    .trim()
    .url("URL inválida"),
});
type RegisterInput = TypeOf<typeof registerSchema>;

const DrawerProducts = ({
  open,
  setOpen,
  action,
  updateData,
}: IDrawerProducts) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const fetchDataCategories = useDebouncedCallback(() => {
    categoryService.getCategories().then((response) => {
      setCategories(response.data);
    });
  });

  useEffect(() => {
    fetchDataCategories();
  }, [fetchDataCategories]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    setLoading(true);
    productService
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
          {action === "crear" ? "Crear Producto" : "Editar Producto"}
        </div>
        <div className="mb-4">
          <TextField
            label="Nombre"
            type="text"
            fullWidth
            placeholder="Nombre"
            required
            error={!!errors["name"]}
            helperText={errors["name"] ? errors["name"].message : ""}
            {...register("name")}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Detalle"
            multiline
            maxRows={4}
            type="text"
            fullWidth
            placeholder="Detalle"
            required
            error={!!errors["details"]}
            helperText={errors["details"] ? errors["details"].message : ""}
            {...register("details")}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Categoría"
            select
            fullWidth
            defaultValue=""
            placeholder="Categoría"
            required
            error={!!errors["product_category_id"]}
            helperText={
              errors["product_category_id"]
                ? errors["product_category_id"].message
                : ""
            }
            {...register("product_category_id")}
          >
            {categories.map((option) => (
              <MenuItem
                key={`${nanoid() + "-" + option.product_category_id}`}
                value={option.product_category_id}
              >
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="mb-4">
          <TextField
            label="Marca"
            type="text"
            fullWidth
            placeholder="Marca"
            required
            error={!!errors["brand"]}
            helperText={errors["brand"] ? errors["brand"].message : ""}
            {...register("brand")}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Precio"
            type="number"
            fullWidth
            placeholder="Precio"
            required
            error={!!errors["price"]}
            helperText={errors["price"] ? errors["price"].message : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">S/</InputAdornment>
              ),
            }}
            {...register("price")}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Stock"
            type="number"
            fullWidth
            placeholder="Stock"
            required
            error={!!errors["stock"]}
            helperText={errors["stock"] ? errors["stock"].message : ""}
            {...register("stock")}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="URL de imagen"
            type="text"
            fullWidth
            placeholder="URL de imagen"
            required
            error={!!errors["product_image"]}
            helperText={
              errors["product_image"] ? errors["product_image"].message : ""
            }
            {...register("product_image")}
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
            onClick={() => {
              setOpen(false);
              reset();
            }}
          >
            <span>Cancelar</span>
          </Button>
        </div>
      </Box>
    </Drawer>
  );
};
export default DrawerProducts;
