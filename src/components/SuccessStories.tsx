import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, GraduationCap, DollarSign, Briefcase } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Adebayo M.",
      location: "University of Toronto",
      program: "B.Sc Computer Science",
      scholarship: "$5,000/year",
      emoji: "👨‍💻",
      quote: "Got rejected 3 times applying myself. Scholarix got me admitted to my dream school in Canada in just 5 weeks. Now studying Computer Science with scholarship!",
      highlight: "Admitted in 5 weeks"
    },
    {
      name: "Ngozi P.",
      location: "University of Manchester",
      program: "MSc Data Science",
      scholarship: "£3,000/year",
      emoji: "👩‍🎓",
      quote: "I was skeptical about 'free service' but it's legit. They helped with everything – even negotiated a better scholarship for me. Forever grateful!",
      highlight: "Better scholarship negotiated"
    },
    {
      name: "Ibrahim K.",
      location: "Seneca College, Toronto",
      program: "Business Administration",
      work: "CAD $18/hour part-time",
      emoji: "💼",
      quote: "From Lagos to Toronto in 3 months! The visa support was amazing. I'm now working part-time while studying.",
      highlight: "3 months Lagos to Toronto"
    },
    {
      name: "Favour O.",
      location: "Griffith University, Australia",
      program: "MBA",
      age: "38 years old",
      emoji: "👩‍💼",
      quote: "Single mother with a 10-year gap in education. Thought it was impossible. Scholarix made it happen!",
      highlight: "10-year education gap overcome"
    },
    {
      name: "Emeka J.",
      location: "York University, Canada",
      program: "Engineering",
      achievement: "5 acceptances",
      emoji: "🎯",
      quote: "Applied to 5 schools, got admitted to ALL 5! Had the luxury to choose. Best decision ever.",
      highlight: "100% acceptance rate"
    },
    {
      name: "Blessing U.",
      location: "University of Bolton, UK",
      program: "MSc Nursing",
      started: "September 2024",
      emoji: "👩‍⚕️",
      quote: "The pre-departure orientation prepared me for everything. Landing in UK wasn't scary at all.",
      highlight: "Smooth transition"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="mb-4 bg-success/10 text-success border-success/20 text-sm px-4 py-2">
            Student Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Real Students. Real Admissions. <span className="text-secondary">Real Dreams Achieved.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See how we've transformed the lives of thousands of Nigerian students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 animate-fade-in-up border-t-4 border-t-secondary" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                    {story.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{story.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      {story.location}
                    </p>
                  </div>
                </div>
                
                <Badge variant="outline" className="mb-3">{story.program}</Badge>
              </div>

              <div className="mb-4 relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-secondary/20" />
                <p className="text-muted-foreground italic pl-6">{story.quote}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  {story.scholarship && (
                    <div className="flex items-center gap-1 text-success">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-semibold">{story.scholarship}</span>
                    </div>
                  )}
                  {story.work && (
                    <div className="flex items-center gap-1 text-success">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold">{story.work}</span>
                    </div>
                  )}
                  {story.achievement && (
                    <span className="font-semibold text-secondary">{story.achievement}</span>
                  )}
                  {story.age && (
                    <span className="text-muted-foreground">{story.age}</span>
                  )}
                </div>
                <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full">
                  <span className="text-xs font-semibold text-secondary">✨ {story.highlight}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 shadow-elevated">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-primary mb-2">2,400+</p>
                <p className="text-muted-foreground">Nigerian Students Processed</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-secondary mb-2">4.8/5</p>
                <p className="text-muted-foreground">Average Google Rating</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-success mb-2">93%</p>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
