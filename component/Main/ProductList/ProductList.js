//css
import styles from "./productList.module.css";
import Product from "./Product/Product";
//kết nối vs store
import { inject, observer } from "mobx-react";
export default inject("ProductStore")(
  observer(function ProductList(props) {
    const products = props.productList;
    return (
      <div>
        {products
          ? products.map((product, index) => {
              return <Product product={product} key={index} />;
            })
          : console.log(products)}
      </div>
    );
  })
);
