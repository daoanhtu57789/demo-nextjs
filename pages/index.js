import Head from "next/head";
import Footer from "./../component/Footer/Footer";
import Header from "./../component/Header/Header";
import Logo from "./../component/Main/Logo/Logo";
import Contact from "./../component/Main/Contact/Contact";
import Products from "./../component/Main/Products/Products";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>

      {/* phần content */}
      <main>
        {/* Logo */}
        <Logo />
        {/* Products */}
        <Products />
        {/* Contact */}
        <Contact />
      </main>

      {/* phần footer */}
      <footer>
        <Footer />
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
