import { useEffect, useState } from "react";

import CategoriesContainer from "@/containers/Admin/CategoriesContainer";
import Header from "@/containers/Header";
import { NextPage } from "next";
import ProductsContainer from "@/containers/Admin/ProductsContainer";
import Sidebar from "@/containers/Admin/Sidebar";
import UsersContainer from "@/containers/Admin/UsersContainer";
import { useRouter } from "next/router";

const AdminPage: NextPage = () => {
  const router = useRouter();
  const [itemSelected, setItemSelected] = useState("users");

  useEffect(() => {
    const { query } = router;
    if (query.item) {
      setItemSelected(query.item as string);
    }
  }, [router]);

  return (
    <>
      <Header />
      <main className="w-full h-full">
        <div className="flex h-full w-full">
          <Sidebar
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
          />
          <UsersContainer itemSelected={itemSelected} />
          <ProductsContainer itemSelected={itemSelected} />
          <CategoriesContainer itemSelected={itemSelected} />
        </div>
      </main>
    </>
  );
};

export default AdminPage;
