import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const TopNavigation = () => {
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
          <Button variant="ghost" size="icon">
            <ShoppingBag className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};