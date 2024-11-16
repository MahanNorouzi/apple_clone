import Navbar from "./Navbar";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Model from "./model";
import Features from "./Features";
import Gpu from "./Gpu";
import Footer from "./Footer";

export const IPhonepage = () => {
  return (
    <div>
      <main className="bg-black">
        <Navbar /> <Hero /> <Highlights />
        <Model />
        <Features />
        <Gpu />
        <Footer />
      </main>
    </div>
  );
};

export default IPhonepage;
