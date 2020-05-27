import { useRouter } from "next/router";
import Router from "next/router";
import Head from "next/head";
//mobx
import { observer, inject } from "mobx-react";
import Link from "next/link";
import ProductDetail from "./../../component/Main/ProductList/Product/Product";
import { Button } from "antd";

export default inject("ProductStore")(
  observer(function Product(props) {
    //router để lấy các query
    const router = useRouter();
    const product = props.ProductStore.productList.filter(
      (product) => product.id === +router.query.id
    );

    return (
      <div className="container">
        <Head>
          <title>{router.query.id}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <ProductDetail product={product[0]} />
          <Link href="/">
            <Button type="primary">
              <a>Quay Lại</a>
            </Button>
          </Link>
        </div>
      </div>
    );
  })
);
