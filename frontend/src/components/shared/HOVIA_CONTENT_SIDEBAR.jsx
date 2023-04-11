import React, { useEffect, useState } from "react";
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
  const [component, setComponent] = useState("1");
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    console.log(innerWidth)
    return { innerWidth, innerHeight };
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
        style={{ backgroundColor: "white", width: "300px!important", maxWidth: "300px!important" }}
      >
        <div className="logo" />

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            setComponent(key);
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
          style={{ backgroundColor: "white", width: "300px!important", maxWidth: "300px!important" }}

        />
      </Sider>
      <Content
        style={{
          margin: "0px 0px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          height: windowSize.innerWidth > 500 ? "80vh" : undefined,
        }}
      >
        {contentDisplay(component)}
      </Content>
      <Footer style={{ display: "none" }} />
    </Layout>
  );
}

export default HOVIA_CONTENT_SIDEBAR;
