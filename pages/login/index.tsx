import type { NextPage } from "next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import FormLogin from "@/containers/FormLogin";
import FormRegister from "@/containers/FormRegister";

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
        <FormLogin />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormRegister />
      </TabPanel>
    </div>
  );
};

export default Login;
