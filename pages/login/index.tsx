import { Button } from "@mui/material";
import type { NextPage } from "next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={`w-full flex justify-center h-[400px] ${
        value !== index ? "hidden" : ""
      }`}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Login: NextPage = () => {
  const [value, setValue] = useState(0);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center w-full h-full bg-white justify-center pb-32">
      <Box sx={{ borderBottom: 1, borderColor: "gray" }}>
        <Tabs
          classes={{ indicator: "bg-black" }}
          value={value}
          onChange={handleChange}
        >
          <Tab
            style={{ color: "black" }}
            className="text-2xl w-64"
            label="Iniciar sesión"
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: "black" }}
            className="text-2xl w-64"
            label="Crear Cuenta"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="w-96 h-[400px] mt-8">
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Correo electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder=" Correo electrónico"
              />
            </div>
            <div className="mb-6">
              <label className="block  text-sm font-bold mb-2">
                Contraseña
              </label>
              <input
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="w-full h-[400px] mt-8">
          <form className="w-[500px]">
            <div className="mb-4 flex w-full">
              <div className="mr-4 w-1/2">
                <label className="block text-sm font-bold mb-2">Nombre</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=" Nombre"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-bold mb-2">Apellido</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=" Apellido"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">
                Correo electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder=" Correo electrónico"
              />
            </div>
          </form>
        </div>
      </TabPanel>
    </div>
  );
};

export default Login;
