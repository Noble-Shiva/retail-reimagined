import { Home, Search, User, Sparkles, Share, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "beauty", name: "Beauty" },
  { id: "fashion", name: "Fashion" },
  { id: "lifestyle", name: "Lifestyle" },
];

export const Sidebar = ({ activeCategory, onCategoryChange }: SidebarProps) => {
  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Logo & Brand */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Take Retail</h1>
        </div>
      </div>

      <Separator />

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">
        <Button
          variant="ghost"
          size="default"
          className="w-full justify-start gap-3 text-left"
          onClick={() => onCategoryChange("home")}
        >
          <Home className="w-4 h-4" />
          Home
        </Button>

        <div className="py-2">
          <h3 className="text-sm font-medium text-muted-foreground mb-2 px-3">Category</h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "secondary" : "ghost"}
                size="default"
                className="w-full justify-start text-left"
                onClick={() => onCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Actions */}
      <div className="p-4 space-y-2">
        <Button
          variant="ghost"
          size="default"
          className="w-full justify-start gap-3 text-left"
        >
          <Share className="w-4 h-4" />
          Share
        </Button>
        <Button
          variant="ghost"
          size="default"
          className="w-full justify-start gap-3 text-left"
        >
          <Globe className="w-4 h-4" />
          English
        </Button>
        <Button
          variant="coral"
          size="default"
          className="w-full justify-start gap-3 text-left"
        >
          <User className="w-4 h-4" />
          Login
        </Button>
      </div>
    </div>
  );
};