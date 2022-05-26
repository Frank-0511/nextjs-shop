import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const redirectLogin = () => {
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  return (
    <header className="w-full flex h-20 bg-black text-white items-center justify-between px-10">
      <Button className="mr-8 text-white" variant="text">
        <MenuRoundedIcon className="mr-2" />
        Categorias
      </Button>
      <h1 className="font-bold text-2xl font-press">Tecno Store</h1>
      <div className="flex">
        <Button
          className="mr-8 text-white"
          variant="text"
          onClick={() => redirectLogin()}
        >
          <LoginRoundedIcon className="mr-2" />
          Iniciar sesión
        </Button>
        <Button className="text-white" variant="text">
          <ShoppingCartRoundedIcon className="mr-2" />
          Mi carrito
        </Button>
      </div>
    </header>
  );
};

export default Header;
