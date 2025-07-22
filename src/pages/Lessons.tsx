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

  const generateCLessons = () => {
    const levels = [
      {
        title: "Level 1: Variables and Data Types",
        description: "Master the fundamentals of C variables and data types",
        topics: ["int, float, char", "Variable declaration", "Type conversion", "Constants", "Sizeof operator", "Input/Output"]
      },
      {
        title: "Level 2: Comments",
        description: "Learn to document your C code effectively",
        topics: ["Single-line comments", "Multi-line comments", "Documentation style", "Code readability", "Best practices", "Comment syntax"]
      },
      {
        title: "Level 3: Functions",
        description: "Understand function creation and usage in C",
        topics: ["Function declaration", "Function definition", "Parameters", "Return values", "Function calls", "Local variables"]
      },
      {
        title: "Level 4: If-Else Statements",
        description: "Master conditional logic and decision making",
        topics: ["If statements", "Else clauses", "Else-if chains", "Nested conditions", "Logical operators", "Comparison operators"]
      },
      {
        title: "Level 5: Loops",
        description: "Learn iteration and repetitive operations",
        topics: ["For loops", "While loops", "Do-while loops", "Loop control", "Break and continue", "Nested loops"]
      }
    ];

    const lessons = [];
    
    levels.forEach((level, levelIndex) => {
      for (let round = 1; round <= 3; round++) {
        for (let exercise = 1; exercise <= 6; exercise++) {
          const lessonNumber = levelIndex * 18 + (round - 1) * 6 + exercise;
          const topicIndex = (exercise - 1) % level.topics.length;
          
          lessons.push({
            title: `${level.title.split(': ')[1]} - Round ${round}.${exercise}`,
            description: `Practice ${level.topics[topicIndex].toLowerCase()}`,
            duration: "3 min",
            xp: 25,
            difficulty: levelIndex < 2 ? "Beginner" as const : levelIndex < 4 ? "Intermediate" as const : "Advanced" as const,
            level: levelIndex + 1,
            round: round,
            exercise: exercise,
            isCompleted: lessonNumber <= 12, // First 12 lessons completed
            isLocked: lessonNumber > 15 // Lock lessons after 15
          });
        }
      }
    });

    return lessons;
  };

  const lessonsData = {
    'c programming': generateCLessons(),
    'c++': [
      {
        title: "C++ Basics",
        description: "Introduction to C++ syntax and features",
        duration: "20 min",
        xp: 75,
        difficulty: "Beginner" as const,
        isCompleted: false
      },
      {
        title: "Object-Oriented Programming",
        description: "Classes, objects and OOP principles",
        duration: "25 min",
        xp: 100,
        difficulty: "Intermediate" as const,
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