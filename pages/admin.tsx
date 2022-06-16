import AdminContainer from "@/containers/Admin/AdminContainer";
import { NextPage } from "next";

const AdminPage: NextPage = () => {
  return (
    <div className="flex">
      <AdminContainer />
    </div>
  );
};

export default AdminPage;
