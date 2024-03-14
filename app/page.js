import Image from "next/image";
import Banner from "./components/banner/banner";
import styles from "./page.module.css";
import ProductListPage from "./products/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner
        style={styles}
        bannerUrl="/images/banner.jpg"
        bannerMobileUrl="/images/banner-mobile.jpg"
      />
      <div className={styles.marginBtm5}></div>
      <ProductListPage styles={styles} />
    </main>
  );
}
