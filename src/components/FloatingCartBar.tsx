import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export const FloatingCartBar = () => {
  const { getTotalPrice, getTotalItems, openCart } = useCart();
  
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-md">
      <Button
        onClick={openCart}
        className="w-full h-14 rounded-2xl text-base font-semibold flex items-center justify-between px-6 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-sm font-bold">{totalItems}</span>
          </div>
          <ShoppingBag className="w-5 h-5" />
          <span>View Cart</span>
        </div>
        <span>${totalPrice.toFixed(2)}</span>
      </Button>
    </div>
  );
};