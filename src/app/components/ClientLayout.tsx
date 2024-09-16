"use client"; // Asegura que se renderice solo en el cliente

import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ApiFilled,
  ApiTwoTone,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

//Define el nombre de los items
const itemName = ["Usuario", "Recursos", "Segmentos", "Calzadas", "Bordillos"];

// Definir los items del menú
const items = [UserOutlined, ApiFilled, ApiFilled, ApiFilled, ApiFilled].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: ` ${itemName[index]}`,
  })
);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children} {/* Aquí se renderiza el contenido dinámico */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}
