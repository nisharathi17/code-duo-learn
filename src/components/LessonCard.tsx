import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, CheckCircle, Lock } from "lucide-react";

interface LessonCardProps {
  title: string;
  description: string;
  duration: string;
  xp: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  isCompleted?: boolean;
  isLocked?: boolean;
  onClick?: () => void;
}

export const LessonCard = ({
  title,
  description,
  duration,
  xp,
  difficulty,
  isCompleted = false,
  isLocked = false,
  onClick
}: LessonCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-success text-success-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className={`
      group relative p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-hover
      ${isLocked ? 'opacity-60' : ''}
      ${isCompleted ? 'border-success' : 'border-border'}
      bg-gradient-card
    `} onClick={!isLocked ? onClick : undefined}>
      
      {isCompleted && (
        <CheckCircle className="absolute top-4 right-4 h-6 w-6 text-success" />
      )}
      {isLocked && (
        <Lock className="absolute top-4 right-4 h-5 w-5 text-muted-foreground" />
      )}
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {duration}
          </div>
          
          <div className="flex items-center gap-1 text-xs text-accent">
            <Star className="h-3 w-3" />
            {xp} XP
          </div>
        </div>
        
        <Button 
          variant={isCompleted ? "success" : isLocked ? "secondary" : "default"}
          className="w-full"
          disabled={isLocked}
        >
          {isCompleted ? "Review Lesson" : isLocked ? "Complete previous lessons" : "Start Lesson"}
        </Button>
      </div>
    </Card>
  );
};