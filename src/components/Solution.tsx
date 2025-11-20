import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Clock, Users, School, Award } from "lucide-react";

const Solution = () => {
  const benefits = [
    {
      icon: Users,
      stat: "800,000+",
      title: "Success Stories",
      description: "Join hundreds of thousands who've successfully gotten admitted through our proven system"
    },
    {
      icon: School,
      stat: "1,500+",
      title: "Partner Schools",
      description: "Direct partnerships with universities in Canada, USA, UK, Australia, Ireland, New Zealand & more"
    },
    {
      icon: Award,
      stat: "140,000+",
      title: "Program Options",
      description: "Business, Engineering, IT, Medicine, Law, Arts – find your perfect program match"
    },
    {
      icon: TrendingUp,
      stat: "93%",
      title: "Higher Acceptance Rates",
      description: "Our students have 93% admission success rate vs. 40% for direct applications"
    },
    {
      icon: Clock,
      stat: "2-4 weeks",
      title: "Fast-Track Processing",
      description: "Average admission decision: 2-4 weeks (vs. 3-6 months applying alone)"
    },
    {
      icon: CheckCircle2,
      stat: "End-to-End",
      title: "Full Support",
      description: "From school selection to visa approval – we handle everything"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            The Proven System That Gets You Accepted to Top International Schools
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-secondary">What is Scholarix?</h3>
            <p className="text-lg text-muted-foreground">
              Scholarix is Nigeria's #1 platform for international school admissions, powered by ApplyBoard – the trusted global partner that has successfully placed <span className="font-semibold text-primary">800,000+ students</span> in <span className="font-semibold text-primary">1,500+ schools</span> offering <span className="font-semibold text-primary">140,000+ programs</span> worldwide.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
            Why Scholarix + ApplyBoard Is Your Best Choice:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">{benefit.stat}</div>
                    <h4 className="text-lg font-bold mb-2 text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
