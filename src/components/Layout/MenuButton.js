import { MenuOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const MenuButton = () => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to="/">Home</Link>,
        },
        {
          key: "2",
          label: <Link to="/Notes">Notes</Link>,
        },
        {
          key: '3',
          label: (
            <Link to="/Lists">
              Lists
            </Link>
          ),
        },
      ]}
    />
  );

  const menuStyles = { display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "flex-start", alignItems: "flex-start", alignContent: "stretch" };

  return (
    <div style={menuStyles}>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button size="large" icon={<MenuOutlined />}></Button>
      </Dropdown>
    </div>
  );
};
export default MenuButton;
