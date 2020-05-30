//ant
import { Row, Col, Button, Menu } from "antd";
import { useRouter } from "next/router";
import Router from "next/router";
import {
  ShoppingCartOutlined,
  ReadOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import styles from "./header.module.css";
//Link
import Link from "next/link";

export default function Header({ href }) {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={3}></Col>
        <Col span={1}>
          <img
            src="/fish.svg"
            width="100%"
            height="38px"
            style={{ marginBottom: "5px" }}
          />
        </Col>
        <Col span={15}>
          <h1 className={styles.h1}>FishCastle</h1>
        </Col>
        <Col span={1}>
          <ShoppingCartOutlined className={styles.cart} />
        </Col>
        <Col span={4}>
          <Button type="link" className={styles.pay}>
            USD$25.00
          </Button>
        </Col>
      </Row>

      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[router.pathname === "/" ? "2" : "1"]}
      >
        <Menu.Item key="1">
          <ReadOutlined />
          <Link href="/newslist">
            <a>Tin Tức</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <ShopOutlined />
          <Link href="/">
            <a>Sản Phẩm</a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
