import { LOCAL_USER_ID, LOCAL_USER_ROLE } from "@/utils/storage";

import Button from "@mui/material/Button";
import DrawerCategories from "@/components/DrawerCategories";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { ROLES } from "@/utils/constants";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const redirectLogin = () => {
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  const redirectAdmin = () => {
    setTimeout(() => {
      router.push("/admin");
    }, 500);
  };

  const handleLogout = () => {
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  return (
    <header className="w-full flex h-20 bg-black text-white items-center justify-between px-10">
      <DrawerCategories />
      <h1 className="font-bold text-2xl font-press">Tecno Store</h1>
      <div className="flex">
        {!LOCAL_USER_ID() && (
          <Button
            className="mr-4 text-white"
            variant="text"
            onClick={() => redirectLogin()}
          >
            <LoginRoundedIcon />
          </Button>
        )}
        {LOCAL_USER_ID() && (
          <Button
            className="mr-4 text-white"
            variant="text"
            onClick={() => handleLogout()}
          >
            <LogoutRoundedIcon />
          </Button>
        )}
        <Button className="mr-4 text-white" variant="text">
          <ShoppingCartRoundedIcon />
        </Button>
        {LOCAL_USER_ROLE() === ROLES.admin && (
          <Button
            className="mr-4 text-white"
            variant="text"
            onClick={() => redirectAdmin()}
          >
            <SettingsIcon />
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
