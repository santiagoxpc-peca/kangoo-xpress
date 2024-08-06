import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center relative"
      style={{ backgroundImage: "url(/background-hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="text-center text-white px-4 z-20">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Creamos soluciones, unimos posibilidades
        </h1>
        <Link
          href="#services"
          className="bg-primary border border-primary px-4 py-2 rounded mt-2 md:mt-0 text-white hover:shadow-xl hover:bg-transparent hover:text-primary transition ease-in-out duration-300 text-xl"
        >
          Conoce Más
        </Link>
      </div>
    </section>
  );
};

export default Hero;
