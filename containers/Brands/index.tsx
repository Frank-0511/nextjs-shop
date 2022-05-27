import Image from "next/image";
import styles from "./Brands.module.css";

const Brands = () => {
  const data = [
    {
      name: "Hyperx",
      image: "https://phantom.pe/pub/media/wysiwyg/marcas/hyperx.jpg",
    },
    {
      name: "Logitech",
      image: "https://phantom.pe/pub/media/wysiwyg/marcas/logitech.jpg",
    },
    {
      name: "Razer",
      image: "https://phantom.pe/pub/media/wysiwyg/marcas/razer.jpg",
    },
    {
      name: "Nintendo",
      image: "https://phantom.pe/pub/media/wysiwyg/marcas/nintendo.jpg",
    },
    {
      name: "Bose",
      image: "https://phantom.pe/pub/media/wysiwyg/marcas/bose.jpg",
    },
    {
      name: "PS",
      image: "https://phantom.pe/pub/media/wysiwyg/marcas/ps.jpg",
    },
    {
      name: "JBL",
      image: "https://phantom.pe/pub/media/wysiwyg/marcas/jbl.jpg",
    },
  ];
  return (
    <div className={styles.Brands}>
      <h1 className={styles.BrandTitle}>Marcas</h1>
      <div className={styles.BrandContainerWrapper}>
        <div className={styles.BrandContainer}>
          {data.map((item, index) => (
            <div key={`item-brand-${index}`} className={styles.BrandItem}>
              <Image
                src={item.image}
                alt={item.name}
                width={180}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Brands;
