import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Nuestra Historia
            </h1>
            <p className="text-xl text-muted-foreground">
              Donde la tradición occidental se encuentra con la artesanía moderna
            </p>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                ADIVAN nació de una pasión por la artesanía auténtica del cuero y un profundo respeto 
                por las tradiciones occidentales. Cada pieza que creamos cuenta una historia—una historia de dedicación, 
                calidad y el atractivo atemporal de los artículos de cuero genuino.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Nuestro viaje comenzó en un pequeño taller donde las técnicas tradicionales de trabajo del cuero 
                se encontraron con sensibilidades de diseño moderno. Creemos que cada cinturón, cartera y bolso debe 
                no solo cumplir su propósito sino también ser un testimonio de la habilidad del artesano y la 
                belleza natural del material.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                Hoy, ADIVAN se erige como un símbolo de calidad y autenticidad. Obtenemos solo el 
                cuero más fino y empleamos técnicas consagradas para crear productos que envejecen 
                bellamente y duran por generaciones. Esta es la artesanía del cuero en su máxima expresión—
                donde cada puntada importa y cada detalle cuenta.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Pasión</h3>
                <p className="text-muted-foreground">
                  Cada pieza está elaborada con amor y dedicación al arte del trabajo del cuero
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Calidad</h3>
                <p className="text-muted-foreground">
                  Usamos solo materiales premium y técnicas tradicionales para productos duraderos
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Autenticidad</h3>
                <p className="text-muted-foreground">
                  Fieles a las tradiciones occidentales mientras abrazamos la excelencia del diseño moderno
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
