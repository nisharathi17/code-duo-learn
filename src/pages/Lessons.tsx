import { Header } from "@/components/Header";
import { LessonCard } from "@/components/LessonCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Trophy } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function Lessons() {
  const navigate = useNavigate();
  const { language } = useParams();

  const lessonsData = {
    javascript: [
      {
        title: "Variables and Data Types",
        description: "Learn about let, const, var and basic data types",
        duration: "15 min",
        xp: 50,
        difficulty: "Beginner" as const,
        isCompleted: true
      },
      {
        title: "Functions and Scope",
        description: "Understanding function declarations and scope",
        duration: "20 min",
        xp: 75,
        difficulty: "Beginner" as const,
        isCompleted: true
      },
      {
        title: "Arrays and Objects",
        description: "Working with arrays and objects in JavaScript",
        duration: "25 min",
        xp: 100,
        difficulty: "Intermediate" as const,
        isCompleted: false
      },
      {
        title: "Async Programming",
        description: "Promises, async/await and handling asynchronous code",
        duration: "30 min",
        xp: 150,
        difficulty: "Advanced" as const,
        isLocked: true
      }
    ],
    python: [
      {
        title: "Python Basics",
        description: "Variables, data types and basic syntax",
        duration: "18 min",
        xp: 50,
        difficulty: "Beginner" as const,
        isCompleted: false
      },
      {
        title: "Control Flow",
        description: "If statements, loops and conditionals",
        duration: "22 min",
        xp: 75,
        difficulty: "Beginner" as const,
        isLocked: true
      }
    ]
  };

  const currentLessons = lessonsData[language as keyof typeof lessonsData] || [];
  const completedCount = currentLessons.filter(lesson => lesson.isCompleted).length;
  const progressPercent = (completedCount / currentLessons.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold capitalize text-foreground">
              {language} Course
            </h1>
            <p className="text-muted-foreground mt-1">
              Master the fundamentals of {language} programming
            </p>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="p-6 mb-8 bg-gradient-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">Your Progress</h2>
              <p className="text-sm text-muted-foreground">
                {completedCount} of {currentLessons.length} lessons completed
              </p>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Trophy className="h-5 w-5" />
              <span className="font-bold">
                {currentLessons.reduce((total, lesson) => lesson.isCompleted ? total + lesson.xp : total, 0)} XP
              </span>
            </div>
          </div>
          <Progress value={progressPercent} className="h-3" />
        </Card>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLessons.map((lesson, index) => (
            <LessonCard
              key={index}
              {...lesson}
              onClick={() => {
                if (!lesson.isLocked) {
                  // Navigate to lesson content
                  console.log('Navigate to lesson:', lesson.title);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}