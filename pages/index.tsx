import BestSellers from "@/containers/BestSellers";
import Brands from "@/containers/Brands";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import type { NextPage } from "next";
import Novelty from "@/containers/Novelty";
import Promotion from "@/containers/Promotion";

const HomePage: NextPage = () => {
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

export default HomePage;
