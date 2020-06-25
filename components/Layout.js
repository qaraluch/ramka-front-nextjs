import Meta from "../components/Meta";
import Alert from "../components/Alert";
import Footer from "../components/Footer";

//TODO: whats for preview
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
