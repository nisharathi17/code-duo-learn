import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Crown, Lock } from "lucide-react";

interface LanguageCardProps {
  name: string;
  icon: string;
  description: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  isLocked?: boolean;
  isPremium?: boolean;
  onClick?: () => void;
}

export const LanguageCard = ({
  name,
  icon,
  description,
  progress,
  totalLessons,
  completedLessons,
  isLocked = false,
  isPremium = false,
  onClick
}: LanguageCardProps) => {
  return (
    <Card className={`
      group relative p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-hover
      ${isLocked ? 'opacity-60' : ''}
      bg-gradient-card border-2 hover:border-primary/20
    `} onClick={onClick}>
      {isPremium && (
        <Crown className="absolute top-4 right-4 h-5 w-5 text-accent" />
      )}
      {isLocked && (
        <Lock className="absolute top-4 right-4 h-5 w-5 text-muted-foreground" />
      )}
      
      <div className="flex items-start gap-4">
        <div className="text-4xl animate-bounce-in">
          {icon}
        </div>
        
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          
          {!isLocked && (
            <>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold text-primary">
                    {completedLessons}/{totalLessons} lessons
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <Button 
                variant={progress > 0 ? "default" : "outline"} 
                className="w-full"
                disabled={isLocked}
              >
                {progress > 0 ? "Continue" : "Start Learning"}
              </Button>
            </>
          )}
          
          {isLocked && (
            <Button variant="secondary" className="w-full" disabled>
              Complete previous courses to unlock
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};