import CardProducts from "@/components/CardProducts";

const Promotion = () => {
  return (
    <div className="mb-8">
      <h1 className="text-xl font-bold border-b-2 border-black  mb-8">
        Promotion
      </h1>
      <div className="flex flex-wrap">
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
      </div>
    </div>
  );
};

export default Promotion;
