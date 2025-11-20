import { Card } from "@/components/ui/card";
import { CheckCircle2, Search, FileCheck, Send, Trophy } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "FREE ASSESSMENT",
      timeline: "Day 1",
      icon: Search,
      items: [
        "Submit your profile online",
        "Our experts review your qualifications",
        "Receive personalized school recommendations within 24 hours",
        "100% FREE – No payment required"
      ]
    },
    {
      step: "2",
      title: "CHOOSE YOUR SCHOOLS",
      timeline: "Days 2-7",
      icon: FileCheck,
      items: [
        "Browse matched schools and programs",
        "Compare tuition fees, scholarships, job prospects",
        "Get honest advice on best-fit options",
        "Select up to 5 schools to apply"
      ]
    },
    {
      step: "3",
      title: "WE HANDLE APPLICATIONS",
      timeline: "Days 8-30",
      icon: Send,
      items: [
        "We prepare all documents professionally",
        "Submit applications to multiple schools",
        "Track application status in real-time",
        "Negotiate better offers on your behalf"
      ]
    },
    {
      step: "4",
      title: "GET ADMITTED & VISA",
      timeline: "Days 31-90",
      icon: Trophy,
      items: [
        "Receive admission letters (usually multiple offers)",
        "We help you choose the best option",
        "Complete visa application guidance",
        "Pre-departure orientation included"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            From Application to Admission in <span className="text-secondary">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven process takes you from dream to reality in just 60-90 days
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                {/* Timeline connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary hidden md:block" />
                )}

                <Card className="p-6 md:p-8 shadow-elevated hover:shadow-elevated transition-all border-l-4 border-l-secondary">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Step Number and Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          {step.step}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                          <step.icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full mb-2">
                          <span className="text-sm font-semibold text-secondary">{step.timeline}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">STEP {step.step}: {step.title}</h3>
                      </div>

                      <ul className="space-y-3">
                        {step.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <Card className="mt-12 p-8 gradient-primary text-white text-center animate-scale-in">
            <h3 className="text-3xl font-bold mb-2">Average Time to Admission</h3>
            <p className="text-5xl font-bold mb-4">60-90 DAYS</p>
            <p className="text-white/90">vs. 3-6 months applying alone</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
