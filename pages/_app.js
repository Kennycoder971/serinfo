import "../styles/globals.css";
import NavBar from "../ui/component/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
