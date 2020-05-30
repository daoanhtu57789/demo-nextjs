//css cuả antd
import "antd/dist/antd.css";
import { Provider } from "mobx-react";
import ProductStore from "../stores/ProductStore";
import NewsStore from "../stores/NewsStore";

//có thể dùng tạo
/*const store = {ProductStore,NewsStore} 
  ở phần Provider dùng store = {...store} cũng được

*/

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider ProductStore={ProductStore} NewsStore={NewsStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
