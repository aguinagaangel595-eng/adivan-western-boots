import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-6">
        <div className="flex-1 w-full">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            {category}
          </p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
            {name}
          </h3>
          <p className="text-2xl font-bold text-primary">{price}</p>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
