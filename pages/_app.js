import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col justify-center align-center">
      <div className="w-full bg-[#FFC170]">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
