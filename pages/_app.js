import "../styles/globals.css";
import NavBar from "../ui/component/Navbar/Navbar";
import Container from "../ui/component/Container/Container";
function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <NavBar />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
