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
              The Art of Leather
            </h1>
            <p className="text-xl text-muted-foreground">
              Every piece is a masterpiece of traditional craftsmanship
            </p>
          </div>
        </section>

        {/* Main Image */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
              <img
                src={craftsmanshipImage}
                alt="Artisan crafting leather"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                  <Ruler className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Selection</h3>
                <p className="text-muted-foreground">
                  We carefully select premium full-grain leather, examining each hide for quality, 
                  texture, and character. Only the finest materials make it to our workshop.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                  <Scissors className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Crafting</h3>
                <p className="text-muted-foreground">
                  Using traditional tools and time-honored techniques, our artisans cut, shape, 
                  and stitch each piece by hand with meticulous attention to detail.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                  <Hammer className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Finishing</h3>
                <p className="text-muted-foreground">
                  Every edge is burnished, every seam reinforced. The final product is 
                  inspected to ensure it meets our exacting standards of excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8">
              Built to Last
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              We believe in creating products that improve with age. Our leather goods develop a 
              unique patina over time, telling the story of your adventures while maintaining their 
              strength and functionality. This is craftsmanship that honors both tradition and longevity.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Craftsmanship;
