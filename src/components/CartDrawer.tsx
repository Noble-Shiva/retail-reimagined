import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

export const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();
  const minimumOrder = 20;
  const freeDeliveryThreshold = 35;
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - totalPrice);
  const deliveryProgress = Math.min(100, (totalPrice / freeDeliveryThreshold) * 100);

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0 flex flex-col">
        <SheetHeader className="p-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold">Cart</SheetTitle>
            <Button variant="ghost" size="icon" onClick={closeCart}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {totalPrice < minimumOrder && totalItems > 0 && (
            <div className="mx-6 mt-6 p-4 bg-muted rounded-lg flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-sm font-bold">!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Minimum order amount is ${minimumOrder.toFixed(2)}
              </p>
            </div>
          )}

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-6">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground text-center">Add some products to get started</p>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-sm">
                          {item.name}
                          {item.variant && (
                            <span className="text-muted-foreground"> - {item.variant}</span>
                          )}
                        </h4>
                        <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="w-6 h-6 text-muted-foreground hover:text-foreground"
                        onClick={() => removeItem(`${item.id}-${item.variant}`)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center rounded-full border border-border">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 rounded-full"
                          onClick={() => updateQuantity(`${item.id}-${item.variant}`, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 rounded-full"
                          onClick={() => updateQuantity(`${item.id}-${item.variant}`, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t bg-card">
            {remainingForFreeDelivery > 0 && (
              <div className="p-6 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="text-sm">
                    Add ${remainingForFreeDelivery.toFixed(2)} more for free delivery (Delivery)
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-foreground transition-all duration-300"
                    style={{ width: `${deliveryProgress}%` }}
                  />
                </div>
              </div>
            )}
            
            <div className="p-6 pt-4">
              <Button 
                className="w-full h-14 rounded-2xl text-base font-semibold flex items-center justify-between px-6"
                disabled={totalPrice < minimumOrder}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-sm font-bold">{totalItems}</span>
                  </div>
                  <span>Checkout</span>
                </div>
                <span>${totalPrice.toFixed(2)}</span>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};