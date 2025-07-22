import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users } from "lucide-react";

export const RewardsCard = () => {
  return (
    <Card className="bg-gradient-card border-none shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              Login and earn rewards
            </h2>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-primary" />
                <span>Earn 5% store credit on every order.</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Refer friends and get 3% store credit.</span>
              </div>
            </div>

            <Button variant="coral" size="default">
              Login
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};