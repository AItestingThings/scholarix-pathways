import { Card } from "@/components/ui/card";
import { AlertCircle, FileX, DollarSign } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: FileX,
      title: "Rejected Applications",
      description: "You applied directly to universities but got rejected – or worse, no response at all after paying ₦50K-₦150K in fees"
    },
    {
      icon: AlertCircle,
      title: "Confusing Process",
      description: "Dozens of requirements, deadlines, documents... you don't know where to start or who to trust"
    },
    {
      icon: DollarSign,
      title: "Lost Money to Fake Agents",
      description: "Paid a 'consultant' ₦300K-₦800K who promised admission but delivered nothing – now you're stuck"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Most Nigerian Students Never Make It to Their Dream Schools
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elevated transition-shadow animate-fade-in-up border-l-4 border-l-destructive" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">❌ {problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-8 bg-primary/5 border-2 border-primary/20 animate-scale-in">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                💬
              </div>
            </div>
            <div>
              <p className="text-lg italic text-foreground mb-2">
                "I wasted ₦420,000 and missed 2 admission cycles with a fake agent. Wished I knew about Scholarix earlier."
              </p>
              <p className="font-semibold text-primary">— Chioma A., Now studying in Toronto</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Problem;
