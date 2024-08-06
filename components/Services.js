import Image from "next/image";

const services = [
  {
    title: "Carga Liviana",
    description:
      "Manejo de carga desde el lugar de recolección hasta el cliente final. Logística integral de recolección, transporte, distribución y entrega puerta a puerta.",
    img: "/services/carga-liviana.jpg",
  },
  {
    title: "Documentos",
    description:
      "Manejo de sobres y/o documentos con recolección, transporte, distribución y entrega puerta a puerta.",
    img: "/services/documentos.jpg",
  },
  {
    title: "Delivery",
    description:
      "Entregas con retorno de documentación o paquetes firmados que pueden adicionar requisitos específicos para la evidencia de la entrega.",
    img: "/services/delivery.jpg",
  },
  {
    title: "Carga Industrial",
    description:
      "Manejo de altos volúmenes de despachos con tiempos óptimos de recolección y entrega con una adecuada manipulación.",
    img: "/services/carga-industrial.jpg",
  },
  {
    title: "Entregas Hoy Mismo",
    description:
      "Manejo de carga desde el lugar de recolección hasta el cliente final. Logística integral de recolección, transporte, distribución y entrega puerta a puerta en el mismo día.",
    img: "/services/entregas-hoy-mismo.jpg",
  },
  {
    title: "Valija Empresarial",
    description:
      "Manejo de envíos con seguridades y tiempos de entrega especiales, protegiendo lo enviado, siendo considerado un servicio especial.",
    img: "/services/valija-empresarial.jpg",
  },
  {
    title: "Courier Internacional",
    description:
      "Gestión de paquetería (compras y/o envíos) bajo régimen courier desde Miami, México o Colombia.",
    img: "/services/courier-internacional.jpg",
  },
  {
    title: "Transporte Comercial de Pasajeros",
    description:
      "Transporte de pasajeros por carretera: servicios regulares de vehículos para el transporte ejecutivo de pasajeros puerta a puerta, excursiones y otros servicios ocasionales de transporte turístico de pasajeros, servicios de enlace con aeropuertos.",
    img: "/services/transporte.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-100 text-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-black">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="absolute object-cover object-center hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold my-8">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
