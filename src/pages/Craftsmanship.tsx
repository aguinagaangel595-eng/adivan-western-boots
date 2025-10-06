import Header from "@/components/Header";
import Footer from "@/components/Footer";
import craftsmanshipImage from "@/assets/craftsmanship-hands.jpg";
import { Hammer, Scissors, Ruler } from "lucide-react";

const Craftsmanship = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              El Arte del Cuero
            </h1>
            <p className="text-xl text-muted-foreground">
              Cada pieza es una obra maestra de artesanía tradicional
            </p>
          </div>
        </section>

        {/* Main Image */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
              <img
                src={craftsmanshipImage}
                alt="Artesano trabajando el cuero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
              Nuestro Proceso
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                  <Ruler className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Selección</h3>
                <p className="text-muted-foreground">
                  Seleccionamos cuidadosamente cuero de grano completo premium, examinando cada piel por calidad, 
                  textura y carácter. Solo los mejores materiales llegan a nuestro taller.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                  <Scissors className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Elaboración</h3>
                <p className="text-muted-foreground">
                  Usando herramientas tradicionales y técnicas consagradas, nuestros artesanos cortan, moldean 
                  y cosen cada pieza a mano con meticulosa atención al detalle.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                  <Hammer className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Acabado</h3>
                <p className="text-muted-foreground">
                  Cada borde es pulido, cada costura reforzada. El producto final es 
                  inspeccionado para asegurar que cumple con nuestros exigentes estándares de excelencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8">
              Construido para Durar
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Creemos en crear productos que mejoran con el tiempo. Nuestros artículos de cuero desarrollan una 
              pátina única con el tiempo, contando la historia de tus aventuras mientras mantienen su 
              fuerza y funcionalidad. Esta es una artesanía que honra tanto la tradición como la longevidad.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Craftsmanship;
