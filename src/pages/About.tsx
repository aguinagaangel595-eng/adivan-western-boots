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
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground">
              Where Western tradition meets modern craftsmanship
            </p>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                ADIVAN was born from a passion for authentic leather craftsmanship and a deep respect 
                for Western traditions. Each piece we create tells a story—a story of dedication, 
                quality, and the timeless appeal of genuine leather goods.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Our journey began in a small workshop where traditional leatherworking techniques 
                met modern design sensibilities. We believe that every belt, wallet, and bag should 
                not only serve its purpose but also be a testament to the artisan's skill and the 
                material's natural beauty.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                Today, ADIVAN stands as a symbol of quality and authenticity. We source only the 
                finest leather and employ time-honored techniques to create products that age 
                beautifully and last for generations. This is leather craftsmanship at its finest—
                where every stitch matters, and every detail counts.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  Every piece is crafted with love and dedication to the art of leatherworking
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We use only premium materials and traditional techniques for lasting products
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Authenticity</h3>
                <p className="text-muted-foreground">
                  True to Western traditions while embracing modern design excellence
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
