import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { IoIosNotifications } from "react-icons/io";
import { BsArrowLeftCircleFill, BsCartFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { icons } from "react-icons";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {" "}
          <h2 className="fs-5 text-center py-3 mb-0">
            <span className="sm-logo">CA</span>
            <span className="lg-logo">Accounts Cart</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard />,
              label: "Dashboard",
            },
            {
              key: "account",
              icon: <GiHamburgerMenu />,
              label: "Account Details",
            },
            {
              key: "customers",
              icon: <AiOutlineUser />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <VideoCameraOutlined />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategory />,
                  label: "Catagory  ",
                },
                {
                  key: "list-category",
                  icon: <SiBrandfolder />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors />,
                  label: "Color ",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors />,
                  label: "Color list",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList />,
              label: "Orders",
            },
            {
              key: "blog",
              icon: <FaBloggerB />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaBloggerB />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center ">
            <div className="position-relative">
              <IoIosNotifications className="fs-4 text-secondary" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="position-relative">
              <BsCartFill className="fs-5 text-secondary" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div>
              <div>
                <h5 className="mb-0">Yash</h5>
                <p className="mb-0">yashrajinfo48@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
