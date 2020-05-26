//css
import styles from "./product.module.css";
import { Button } from "antd";

export default function Product(props) {
  const { product } = props;
  return (
    <div className={styles.product}>
      <h2 className={styles.title}>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      <img
        src={product.image}
        alt=""
        className={styles.image}
        width="480px"
        height="288px"
      />
      <div className={styles.price_button}>
        <div className={styles.price}>${product.price.toFixed(2)}</div>
        <Button className={styles.button} type="default">
          Add to cart
        </Button>
      </div>
    </div>
  );
}
