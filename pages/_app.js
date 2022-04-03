import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className="pt-[104px] md:pt-[72px]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
