import Image from "next/image";

export default function Banner({ bannerUrl, bannerMobileUrl, center }) {
  return (
    <div className={center}>
      <picture>
        <source srcSet={`${bannerMobileUrl} 375w`} media="(max-width: 768px)" />
        <img src={bannerUrl} alt="Image" height={400} width={"100%"} />
      </picture>
    </div>
  );
}
