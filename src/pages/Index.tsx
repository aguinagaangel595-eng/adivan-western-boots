import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import beltImage from "@/assets/product-belt.jpg";
import walletImage from "@/assets/product-wallet.jpg";
import bagImage from "@/assets/product-bag.jpg";
import craftsmanshipImage from "@/assets/craftsmanship-hands.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Classic Leather Belt",
    price: "$89",
    category: "Belts",
    image: beltImage,
  },
  {
    id: 2,
    name: "Premium Bifold Wallet",
    price: "$75",
    category: "Wallets",
    image: walletImage,
  },
  {
    id: 3,
    name: "Messenger Bag",
    price: "$199",
    category: "Bags",
    image: bagImage,
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      
      <main>
        {/* Featured Products */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked pieces that showcase our commitment to quality and craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/shop">
                  View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Crafted by Hand, Built to Last
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Every ADIVAN product is meticulously handcrafted using traditional techniques 
                  passed down through generations. We believe in the beauty of imperfection and 
                  the strength of authentic materials.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our leather goods develop a rich patina over time, making each piece uniquely 
                  yours. This is more than just a product—it's a companion for life's journey.
                </p>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/craftsmanship">
                    Discover Our Process <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={craftsmanshipImage}
                    alt="Leather craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Piece?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Explore our collection of handcrafted leather goods or get in touch for custom orders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-accent-foreground/30 hover:bg-accent-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
