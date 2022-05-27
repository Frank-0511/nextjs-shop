import { Button, Input } from "@mui/material";

const FormRegister = () => {
  return (
    <div className="w-full h-[400px] mt-8">
      <form className="w-[500px]">
        <div className="mb-6 flex w-full">
          <div className="mr-4 w-1/2">
            <label className="block text-sm font-bold mb-2">Nombre</label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=" Nombre"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-bold mb-2">Apellido</label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=" Apellido"
            />
          </div>
        </div>
        <div className="mb-6 flex w-full">
          <div className="mr-4 w-1/2">
            <label className="block text-sm font-bold mb-2">
              Correo electrónico
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder=" Correo electrónico"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-bold mb-2">Contraseña</label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder=" Contraseña"
            />
          </div>
        </div>
        <div className="mb-6 flex w-full">
          <div className="w-1/2">
            <label className="block text-sm font-bold mb-2">DNI</label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=" DNI"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Completar Registro
          </Button>
        </div>
      </form>
    </div>
  );
};
export default FormRegister;
