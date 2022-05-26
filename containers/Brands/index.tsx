import Image from "next/image";
import styles from "./Brands.module.css";

const Brands = () => {
  return (
    <div className={styles.Brands}>
      <h1 className={styles.BrandTitle}>Marcas</h1>
      <div className={styles.BrandContainer}>
        <div className={styles.BrandItem}>
          <Image
            src="https://w7.pngwing.com/pngs/110/633/png-transparent-laptop-asus-dell-logo-%E5%8D%8E%E7%A1%95-laptop-angle-electronics-text.png"
            alt="Asus"
            height={40}
            width={180}
          />
        </div>
        <div className={styles.BrandItem}>
          <Image
            src="https://logodownload.org/wp-content/uploads/2020/03/redragon-logo-2.png"
            alt="Redragon"
            height={40}
            width={180}
          />
        </div>
        <div className={styles.BrandItem}>
          <Image
            src="https://dtj8xnxpygn9a.cloudfront.net/wp-content/uploads/2020/12/TEROS-LOGO-01.png"
            alt="Teros"
            height={40}
            width={180}
          />
        </div>
        <div className={styles.BrandItem}>
          <Image
            src="https://e7.pngegg.com/pngimages/329/476/png-clipart-logo-gigabyte-technology-brand-gibibyte-general-electric-logo-blue-text.png"
            alt="Gigabyte"
            height={40}
            width={180}
          />
        </div>
      </div>
    </div>
  );
};
export default Brands;
