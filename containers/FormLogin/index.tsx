import { Button, Input, TextField } from "@mui/material";

const FormLogin = () => {
  return (
    <div className="w-96 h-[400px] mt-8">
      <form className="w-full">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Correo electrónico
          </label>
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder=" Correo electrónico"
          />
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">Contraseña</label>
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder=" Contraseña"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Iniciar sesión
          </Button>
          <a
            className="inline-block align-baseline font-bold text-sm text-black hover:text-gray-600"
            href="#"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
