import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { TypeOf, object, string } from "zod";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { userService } from "@/services/user.service";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = object({
  email: string().nonempty("Campo obligatorio").email("Correo invalido"),
  password: string().nonempty("Campo obligatorio"),
});
type RegisterInput = TypeOf<typeof registerSchema>;

const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
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
        router.push("/");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    setLoading(true);
    userService
      .login(values.email, values.password)
      .then(() => {
        reset();
        setLoading(false);
        router.push("/");
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
    <div className="w-96 h-[400px] mt-8">
      <Box
        className="w-full"
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="mb-4">
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
        <div className="mb-6">
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
        <div className="flex items-center justify-between">
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
            {!loading && <span>Iniciar sesión</span>}
          </Button>
          <a
            className="inline-block align-baseline font-bold text-sm text-black hover:text-gray-600"
            href="#"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </Box>
    </div>
  );
};

export default FormLogin;
