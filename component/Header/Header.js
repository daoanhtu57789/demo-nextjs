//ant
import { Row, Col, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={3}></Col>
        <Col span={1}>
          <img
            src="/fish.svg"
            width="38px"
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
    </div>
  );
}
