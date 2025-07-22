import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopNavigation } from "@/components/TopNavigation";
import { RewardsCard } from "@/components/RewardsCard";
import { SaleBanner } from "@/components/SaleBanner";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { FloatingCartBar } from "@/components/FloatingCartBar";
import { getProductsByCategory } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("home");
  const products = getProductsByCategory(activeCategory);

  const categoryTitle = {
    home: "Featured Products",
    beauty: "Beauty",
    fashion: "Fashion", 
    lifestyle: "Lifestyle",
  }[activeCategory] || "Products";

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopNavigation />

        {/* Main Content Area */}
        <main className="flex-1 p-6 space-y-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Rewards Card */}
            <RewardsCard />

            {/* Sale Banner */}
            <SaleBanner />

            {/* Products Section */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {categoryTitle}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    onSale={product.onSale}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <CartDrawer />
      <FloatingCartBar />
    </div>
  );
};

export default Index;