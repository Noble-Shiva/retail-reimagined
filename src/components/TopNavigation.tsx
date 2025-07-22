import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";

export const TopNavigation = () => {
  const { openCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <div className="bg-card border-b border-border p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & Brand - Mobile only */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Take Retail</h1>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" size="sm">
            <Search className="w-4 h-4 mr-2" />
            Home
          </Button>
          <Button variant="ghost" size="sm">
            Search
          </Button>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10 bg-muted border-none rounded-lg"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={openCart} className="relative">
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                {totalItems > 9 ? '9+' : totalItems}
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};