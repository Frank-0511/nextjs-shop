import { Fragment, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { categoryService } from "@/services/category.service";
import { nanoid } from "nanoid";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/router";

const DrawerCategories = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  const fetchDataCategories = useDebouncedCallback(() => {
    categoryService.getCategories().then((response) => {
      setCategories(response.data);
    });
  });

  useEffect(() => {
    fetchDataCategories();
  }, [fetchDataCategories]);

  const handleCategoryClick = (category: any) => {
    router.push(`/categories/${category.product_category_id}`);
  };

  return (
    <Fragment>
      <Button
        className="mr-8 text-white"
        variant="text"
        onClick={() => setOpen(true)}
      >
        <MenuRoundedIcon className="mr-2" />
        Categorias
      </Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 400 }}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List>
            {categories.map((row) => (
              <ListItem key={nanoid()} disablePadding>
                <ListItemButton onClick={() => handleCategoryClick(row)}>
                  <ListItemText primary={row.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Fragment>
  );
};
export default DrawerCategories;
