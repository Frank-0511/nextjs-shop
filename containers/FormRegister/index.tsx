import { Box, Button, CircularProgress, Input, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { TypeOf, object, string } from "zod";
import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = object({
  name: string()
    .nonempty("Campo obligatorio")
    .max(32, "El nombre debe tener menos de 32 caracteres"),
  last_name: string()
    .nonempty("Campo obligatorio")
    .max(32, "El apellido debe tener menos de 32 caracteres"),
  email: string().nonempty("Campo obligatorio").email("Correo invalido"),
  password: string()
    .nonempty("Campo obligatorio")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(16, "La contraseña debe tener menos de 16 caracteres"),
  dni: string()
    .nonempty("Campo obligatorio")
    .min(8, "DNI debe tener 8 caracteres")
    .max(8, "DNI debe tener 8 caracteres"),
});

type RegisterInput = TypeOf<typeof registerSchema>;

const FormRegister = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      setTimeout(() => {
        reset();
        setLoading(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    setLoading(true);
  };

  return (
    <div className="w-full h-[400px] mt-8">
      <Box
        className="w-[500px]"
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="mb-6 flex w-full">
          <div className="mr-4 w-1/2">
            <TextField
              label="Nombre"
              type="text"
              fullWidth
              placeholder=" Nombre"
              required
              error={!!errors["name"]}
              helperText={errors["name"] ? errors["name"].message : ""}
              {...register("name")}
            />
          </div>
          <div className="w-1/2">
            <TextField
              label="Apellido"
              type="text"
              fullWidth
              placeholder=" Apellido"
              required
              error={!!errors["last_name"]}
              helperText={
                errors["last_name"] ? errors["last_name"].message : ""
              }
              {...register("last_name")}
            />
          </div>
        </div>
        <div className="mb-6 flex w-full">
          <div className="mr-4 w-1/2">
            <TextField
              label="Correo electrónico"
              type="email"
              fullWidth
              placeholder="Correo electrónico"
              required
              error={!!errors["email"]}
              helperText={errors["email"] ? errors["email"].message : ""}
              {...register("email")}
            />
          </div>
          <div className="w-1/2">
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              placeholder="Contraseña"
              required
              error={!!errors["password"]}
              helperText={errors["password"] ? errors["password"].message : ""}
              {...register("password")}
            />
          </div>
        </div>
        <div className="mb-6 flex w-full">
          <div className="w-1/2">
            <TextField
              label="DNI"
              type="text"
              fullWidth
              placeholder=" DNI"
              required
              error={!!errors["dni"]}
              helperText={errors["dni"] ? errors["dni"].message : ""}
              {...register("dni")}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            {loading && (
              <CircularProgress
                className={"text-white"}
                size={24}
                thickness={4}
              />
            )}
            {!loading && <span>Completar Registro</span>}
          </Button>
        </div>
      </Box>
    </div>
  );
};
export default FormRegister;
