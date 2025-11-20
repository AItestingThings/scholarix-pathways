import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

const Comparison = () => {
  const features = [
    { feature: "Service Fee", scholarix: "FREE (₦0)", agents: "₦300K-₦800K", diy: "Free but risky" },
    { feature: "Partner Schools", scholarix: "1,500+", agents: "20-50", diy: "All (confusing)" },
    { feature: "Success Rate", scholarix: "93%", agents: "50-60%", diy: "30-40%" },
    { feature: "Processing Time", scholarix: "2-4 weeks", agents: "2-3 months", diy: "3-6 months" },
    { feature: "Visa Support", scholarix: true, agents: "Extra ₦150K", diy: false },
    { feature: "Post-Arrival Help", scholarix: true, agents: false, diy: false },
    { feature: "Track Record", scholarix: "800K+ students", agents: "Unverified", diy: "N/A" },
    { feature: "Money-Back Guarantee", scholarix: true, agents: false, diy: false }
  ];

  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle2 className="w-6 h-6 text-success mx-auto" />
      ) : (
        <XCircle className="w-6 h-6 text-destructive mx-auto" />
      );
    }
    
    if (value.includes("Extra") || value.includes("risky") || value.includes("Unverified")) {
      return (
        <div className="flex items-center justify-center gap-2 text-destructive">
          <MinusCircle className="w-5 h-5" />
          <span className="text-sm">{value}</span>
        </div>
      );
    }
    
    return <span className="text-sm md:text-base">{value}</span>;
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            The Scholarix Advantage Over <span className="text-secondary">Other Agents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why thousands of students choose Scholarix for their study abroad journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <Card className="shadow-elevated min-w-[600px]">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-primary/5 border-b-2 border-border">
                <div className="font-bold text-foreground">Feature</div>
                <div className="text-center">
                  <div className="inline-block px-4 py-2 gradient-secondary text-white rounded-full font-bold text-sm">
                    SCHOLARIX ⭐
                  </div>
                </div>
                <div className="text-center font-semibold text-muted-foreground">Traditional Agents</div>
                <div className="text-center font-semibold text-muted-foreground">DIY Application</div>
              </div>

              {/* Rows */}
              {features.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-4 gap-4 p-6 items-center ${
                    index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                  } ${index === features.length - 1 ? '' : 'border-b border-border'} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="font-semibold text-foreground">{row.feature}</div>
                  <div className="text-center">
                    {typeof row.scholarix === "string" && row.scholarix.includes("FREE") ? (
                      <div className="inline-block px-3 py-1 bg-success/10 text-success rounded-full font-bold text-sm">
                        {row.scholarix}
                      </div>
                    ) : typeof row.scholarix === "string" && (row.scholarix.includes("%") || row.scholarix.includes("+")) ? (
                      <div className="font-bold text-primary text-lg">{row.scholarix}</div>
                    ) : (
                      <div className="font-semibold text-foreground">{renderValue(row.scholarix)}</div>
                    )}
                  </div>
                  <div className="text-center text-muted-foreground">{renderValue(row.agents)}</div>
                  <div className="text-center text-muted-foreground">{renderValue(row.diy)}</div>
                </div>
              ))}
            </Card>
          </div>

          {/* Summary */}
          <div className="mt-8 text-center">
            <Card className="inline-block p-6 shadow-card">
              <p className="text-lg text-muted-foreground">
                <strong className="text-primary">The choice is clear:</strong> Save money, time, and stress with Scholarix's proven system
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
