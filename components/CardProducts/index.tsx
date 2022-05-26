import { Button } from "@mui/material";
import Image from "next/image";
import styles from "./CardProducts.module.css";

const CardProducts = () => {
  return (
    <div className={styles.CardProducts}>
      <div className={styles.CardProductsImage}>
        <Image
          src="https://phantom.pe/pub/media/catalog/product/cache/6ca845d33f30ebb1c707bbfe432bdb47/s/i/silla_corsair_rojo_2.jpg"
          alt="product-1"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.CardProductsText}>
        <h3 className="w-full text-center font-bold">Product 1</h3>
        <p className="line-clamp-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
          blanditiis vitae exercitationem placeat incidunt dignissimos quas
          aliquid fugit ratione ducimus? Amet illo cupiditate earum vero, minus
          veritatis distinctio officia placeat.
        </p>
      </div>
      <div className={styles.CardProductsPrice}>
        <span className={styles.CardProductsPriceOld}>$120</span>
        <span>$100</span>
      </div>
      <Button className={styles.CardProductsButton}>Add to cart</Button>
    </div>
  );
};
export default CardProducts;
