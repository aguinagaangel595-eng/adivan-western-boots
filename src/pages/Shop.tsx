import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import beltImage from "@/assets/product-belt.jpg";
import walletImage from "@/assets/product-wallet.jpg";
import bagImage from "@/assets/product-bag.jpg";

const products = [
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
  {
    id: 4,
    name: "Western Style Belt",
    price: "$95",
    category: "Belts",
    image: beltImage,
  },
  {
    id: 5,
    name: "Card Holder Wallet",
    price: "$59",
    category: "Wallets",
    image: walletImage,
  },
  {
    id: 6,
    name: "Leather Satchel",
    price: "$249",
    category: "Bags",
    image: bagImage,
  },
];

const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our handcrafted leather goods, each piece made with precision and care
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
