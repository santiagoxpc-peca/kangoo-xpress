import Image from "next/image";

const logos = [
  {
    name: "Avihol",
    src: "/logos/avihol.png",
  },
  {
    name: "Bigalli",
    src: "/logos/bigalli.png",
  },
  {
    name: "Bioalimentar",
    src: "/logos/bioalimentar.jpg",
  },
  {
    name: "CCA",
    src: "/logos/cca.jpg",
  },
  {
    name: "Corporación Favorita",
    src: "/logos/corporacion-favorita.jpg",
  },
  {
    name: "Glenn Doman",
    src: "/logos/glenn-doman.png",
  },
  {
    name: "Megaprofer",
    src: "/logos/megaprofer.png",
  },
  {
    name: "Muebles León",
    src: "/logos/muebles-leon.jpg",
  },
  {
    name: "Pladeco",
    src: "/logos/pladeco.jpg",
  },
  {
    name: "PUCE Ambato",
    src: "/logos/puce-ambato.png",
  },
  {
    name: "UInduamérica",
    src: "/logos/uinduamerica.jpg",
  },
  {
    name: "UTécnica Ambato",
    src: "/logos/utecnicaambato.png",
  },
];

const Clients = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100 text-secondary">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-black">
          Nuestros clientes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg shadow-md relative h-48"
            >
              <Image
                src={logo.src}
                fill
                className="absolute object-contain object-center p-10 hover:scale-105 transition-all duration-300 ease-in-out"
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
