import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import { Button } from "@mui/material";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/router";

interface ISidebar {
  itemSelected: string;
  setItemSelected: (item: string) => void;
}

const Sidebar = ({ itemSelected, setItemSelected }: ISidebar) => {
  const router = useRouter();
  const itemsMenu = [
    {
      name: "Usuarios",
      link: "users",
      icon: <AccountBoxRoundedIcon />,
    },
    {
      name: "Categorias",
      link: "categories",
      icon: <CategoryRoundedIcon />,
    },
    {
      name: "Productos",
      link: "products",
      icon: <InventoryRoundedIcon />,
    },
  ];

  const handleItemClick = (item: any) => {
    setItemSelected(item.link);
    router.push(`/admin/?item=${item.link}`, undefined, { shallow: true });
  };

  return (
    <nav className={styles.SidebarContainer}>
      <ul className={styles.SidebarContent}>
        {itemsMenu.map((item) => (
          <li
            key={item.link}
            className={`${styles.ItemMenu} ${
              itemSelected === item.link && styles.ActiveItem
            }`}
          >
            <Button onClick={() => handleItemClick(item)}>
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
