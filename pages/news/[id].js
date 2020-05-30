import { useRouter } from "next/router";
import Router from "next/router";
import Head from "next/head";
//mobx
import { observer, inject } from "mobx-react";
import Link from "next/link";
import { Button } from "antd";

export default inject("NewsStore")(
  observer(function NewsId(props) {
    //router để lấy các query
    const router = useRouter();
    const news = props.NewsStore.newsList.filter(
      (news) => news.id === +router.query.id
    );

    return (
      <div className="container">
        <Head>
          <title>{router.query.id}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>Đây là con cá : {news[0].title}</div>
      </div>
    );
  })
);
