import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Contacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black p-6 rounded-lg shadow-md text-white">
            <div className="flex items-center mb-4">
              <Image
                src="/icon.png"
                alt="Kangoo Logo"
                className="mr-4"
                width={116 / 2}
                height={72 / 2}
              />
              <h3 className="text-xl font-semibold">Gerencia</h3>
            </div>
            <p>Tel. +(593) 98 477 7004</p>
            <p>
              E-mail:{" "}
              <Link href="mailto:gerencia@kangooxpress.com">
                gerencia@kangooxpress.com
              </Link>
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md text-white">
            <div className="flex items-center mb-4">
              <Image
                src="/icon.png"
                alt="Kangoo Logo"
                className="mr-4"
                width={116 / 2}
                height={72 / 2}
              />
              <h3 className="text-xl font-semibold">Operaciones</h3>
            </div>
            <p>Tel. +(593) 96 178 8017</p>
            <p>
              E-mail:{" "}
              <Link href="mailto:operaciones@kangooxpress.com">
                operaciones@kangooxpress.com
              </Link>
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md text-white">
            <div className="flex items-center mb-4">
              <Image
                src="/icon.png"
                alt="Kangoo Logo"
                className="mr-4"
                width={116 / 2}
                height={72 / 2}
              />
              <h3 className="text-xl font-semibold">Ventas</h3>
            </div>
            <p>Tel. +(593) 98 477 7004</p>
            <p>
              E-mail:{" "}
              <a href="mailto:ventas@kangooxpress.com">
                ventas@kangooxpress.com
              </a>
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md text-white">
            <div className="flex items-center mb-4">
              <Image
                src="/icon.png"
                alt="Kangoo Logo"
                className="mr-4"
                width={116 / 2}
                height={72 / 2}
              />
              <h3 className="text-xl font-semibold">Colombia</h3>
            </div>
            <p>Tel. +(57) 301 410 6251</p>
            <p>Colombia</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md text-white">
            <div className="flex items-center mb-4">
              <Image
                src="/icon.png"
                alt="Kangoo Logo"
                className="mr-4"
                width={116 / 2}
                height={72 / 2}
              />
              <h3 className="text-xl font-semibold">México</h3>
            </div>
            <p>Tel. +(52) 1 477 108 3344</p>
            <p>México</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
