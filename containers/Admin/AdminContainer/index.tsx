import { Tabs } from "antd";
import styles from "./AdminContainer.module.css";

const { TabPane } = Tabs;

const AdminContainer = () => {
  return (
    <Tabs tabPosition="left" className={styles.SidebarContainer}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab 3
      </TabPane>
    </Tabs>
  );
};

export default AdminContainer;
