import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Zap, Trophy, Settings } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">🐻</div>
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CodeBear
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Streak */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-accent">
            <Flame className="h-4 w-4 text-accent-foreground animate-pulse-green" />
            <span className="font-bold text-accent-foreground">7</span>
          </div>
          
          {/* XP */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-primary">
            <Zap className="h-4 w-4 text-primary-foreground" />
            <span className="font-bold text-primary-foreground">1,250</span>
          </div>
          
          {/* League */}
          <Badge variant="secondary" className="gap-1">
            <Trophy className="h-3 w-3" />
            Gold League
          </Badge>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};