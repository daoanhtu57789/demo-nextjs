//css cuả antd
import "antd/dist/antd.css";
import { Provider } from "mobx-react";
import ProductStore from "../stores/ProductStore";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider ProductStore={ProductStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
