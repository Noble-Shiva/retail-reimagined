import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const sizes = [
    { id: "small", label: "Small", price: product.price },
    { id: "medium", label: "Medium", price: product.price },
    { id: "large", label: "Large", price: product.price },
  ];

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity}x ${product.name} (${selectedSize}) added to your cart.`,
    });
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-card border-b border-border z-10">
        <div className="flex items-center justify-between p-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button variant="ghost" size="icon">
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Product Content */}
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Product Image */}
        <div className="relative aspect-square bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.onSale && discountPercentage > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute top-4 left-4 bg-gradient-sale border-none"
            >
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {product.name}
            </h1>
            <p className="text-muted-foreground mb-1">
              Comfortable and stylish {product.name.toLowerCase()}
            </p>
            <p className="text-sm text-muted-foreground">
              SKU: {product.id.toUpperCase().replace('-', '')}
            </p>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
              {sizes.map((size) => (
                <div key={size.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value={size.id} id={size.id} />
                    <Label htmlFor={size.id} className="font-medium cursor-pointer">
                      {size.label}
                    </Label>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-foreground">
                      ${size.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart}
            className="w-full h-14 text-lg font-medium bg-primary hover:bg-primary/90"
            size="lg"
          >
            Add ${product.price.toFixed(2)}
          </Button>

          {/* Quantity */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Quantity</Label>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-lg font-medium w-8 text-center">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 p-4 text-center space-y-2 border-t border-border">
        <Button variant="ghost" className="text-primary">
          🛍️ Create your Take App
        </Button>
        <p className="text-sm text-muted-foreground">
          © 2025 Take Retail
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;