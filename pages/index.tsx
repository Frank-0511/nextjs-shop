import Brands from "@/containers/Brands";
import BestSellers from "@/containers/BestSellers";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import Novelty from "@/containers/Novelty";
import Promotion from "@/containers/Promotion";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="mx-auto  lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] py-16 px-8">
        <BestSellers />
        <Novelty />
        <Promotion />
        <Brands />
      </main>
      <Footer />
    </>
  );
};

export default Home;
