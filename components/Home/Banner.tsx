import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative w-full h-[40dvh] sm:h-[50dvh] md:h-[62dvh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/HomeBanner.svg"
        alt="Northern Beaches banner"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12">
        <h1
          className="font-manrope font-bold text-white text-center leading-tight
          text-[22px]
          sm:text-[36px]
          md:text-[48px]
          lg:text-[58px]
          xl:text-[62px]
          max-w-[320px]
          sm:max-w-[560px]
          md:max-w-[780px]
          lg:max-w-[980px]
          xl:max-w-[1100px]
        "
        >
          Discover the most recommended local tradies in the Northern Beaches
        </h1>
      </div>
    </section>
  );
};

export default Banner;
