import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

function HOVIA_CONTENT_SIDEBAR(props) {
  const { contentArray, titles } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [comp, setComp] = useState("1");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(contentArray);
  const contentDisplay = (compKey) => {
    if (compKey === "1") {
      return contentArray[0];
    } else if (compKey === "2") {
      return contentArray[1];
    } else if (compKey === "3") {
      return contentArray[2];
    } else if (compKey === "4") {
      return contentArray[3];
    }
  };
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
        style={{ backgroundColor: "white" }}
      >
        <div className="logo" />

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            setComp(key);
            console.log(key);
          }}
          items={[
            {
              key: "1",
              label: titles[0],
            },
            {
              key: "2",
              label: titles[1],
            },
            {
              key: "3",
              label: titles[2],
            },
            {
              key: "4",
              label: titles[3],
            },
          ]}
        />
      </Sider>
      <Content
        style={{
          margin: "0px 20px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          height: "80vh",
        }}
      >
        {contentDisplay(comp)}
      </Content>
      <Footer style={{ display: "none" }} />
    </Layout>
  );
}

export default HOVIA_CONTENT_SIDEBAR;
