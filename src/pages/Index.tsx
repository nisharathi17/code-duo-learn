import { Header } from "@/components/Header";
import { LanguageCard } from "@/components/LanguageCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const languages = [
    {
      name: "C Programming",
      icon: "🔧",
      description: "Foundation of programming",
      progress: 32,
      totalLessons: 28,
      completedLessons: 9
    },
    {
      name: "C++",
      icon: "⚡",
      description: "Object-oriented programming",
      progress: 15,
      totalLessons: 35,
      completedLessons: 5
    },
    {
      name: "Python",
      icon: "🐍",
      description: "Simple and powerful syntax",
      progress: 67,
      totalLessons: 25,
      completedLessons: 17
    },
    {
      name: "Advanced C++",
      icon: "🚀",
      description: "Advanced concepts & STL",
      progress: 0,
      totalLessons: 40,
      completedLessons: 0,
      isLocked: true,
      isPremium: true
    }
  ];

  const stats = [
    { icon: BookOpen, label: "Lessons", value: "30+", color: "text-primary" },
    { icon: Users, label: "Students", value: "50K+", color: "text-success" },
    { icon: Award, label: "Certificates", value: "12", color: "text-accent" },
    { icon: TrendingUp, label: "Success Rate", value: "94%", color: "text-info" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up">
            <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
              🐻 New Course: Advanced C++
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Learn Programming,<br />One Lesson at a Time
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master C, C++, and Python with your friendly blue bear companion. 
              Build your coding skills through interactive, bite-sized challenges!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Start Learning Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card hover:scale-105 transition-transform duration-300">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Programming Language
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with C programming fundamentals, advance to C++ object-oriented concepts, 
              or explore Python's elegant syntax. Learn at your own pace with CodeBear!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <LanguageCard
                key={index}
                {...language}
                onClick={() => !language.isLocked && navigate(`/lessons/${language.name.toLowerCase()}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
