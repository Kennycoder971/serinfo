import "../styles/globals.css";
import NavBar from "../ui/component/Navbar/Navbar";
import Container from "../ui/component/Container/Container";
import { SerieContextProvider } from "../store/serie-context";

function MyApp({ Component, pageProps }) {
  return (
    <SerieContextProvider>
      <Container>
        <NavBar />
        <Component {...pageProps} />
      </Container>
    </SerieContextProvider>
  );
}

export default MyApp;
