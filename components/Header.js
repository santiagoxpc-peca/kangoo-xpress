import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-primary p-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <Link href="/">
        <Image src="/logo.png" width={400} height={84} alt="Kangoo Xpress" />
      </Link>
      <nav className="lg:text-2xl flex flex-col gap-4 py-4 md:flex-row md:py-0">
        <Link
          href="#services"
          className="mx-2 hover:underline transition ease-in-out duration-300"
        >
          Servicios
        </Link>
        <Link
          href="#about"
          className="mx-2 hover:underline transition ease-in-out duration-300"
        >
          Nosotros
        </Link>
        <Link
          href="#contact"
          className="mx-2 hover:underline transition ease-in-out duration-300"
        >
          Contacto
        </Link>
      </nav>
      <Link
        href="#contact"
        className="bg-primary border border-primary px-4 py-2 rounded mt-2 md:mt-0 text-white hover:shadow-xl hover:bg-transparent hover:text-primary transition ease-in-out duration-300 hidden md:block"
      >
        Solicitar Cotización
      </Link>
    </header>
  );
};

export default Header;
