import Footer from "./Footer";
import Home from "./home/Sections";
import Navbar from "./Navbar";

/*
  The wrapper used to be a <main> containing both the <Navbar> and <Home>, and
  <Home> renders a <main> of its own — two main landmarks per page, with the
  site header inside one of them. The header is a sibling of the single main now.
*/
export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
