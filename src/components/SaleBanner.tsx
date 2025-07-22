import { Button } from "@/components/ui/button";
import saleBannerImage from "@/assets/sale-banner.jpg";

export const SaleBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-floating">
      <div className="absolute inset-0">
        <img
          src={saleBannerImage}
          alt="End of Season Sale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-transparent" />
      </div>
      
      <div className="relative p-8 md:p-12 text-white">
        <div className="max-w-lg">
          <p className="text-sm uppercase tracking-wide mb-2 opacity-90">
            End of Season
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            SALE
          </h1>
          <p className="text-lg mb-6 opacity-90">
            UP TO 55% OFF
          </p>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
};