import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles } from "lucide-react";

const Offer = () => {
  const benefits = [
    {
      title: "FREE Admission Assessment",
      value: "₦75,000 value",
      items: [
        "Eligibility evaluation",
        "School & program recommendations",
        "Scholarship opportunities identified"
      ]
    },
    {
      title: "FREE Application Processing",
      value: "₦0 service fees",
      items: [
        "Document preparation & review",
        "Application submission to 5 schools",
        "Application tracking & follow-up"
      ]
    },
    {
      title: "FREE Expert Consultation",
      value: "₦150,000 value",
      items: [
        "1-on-1 with certified education counselor",
        "Unlimited WhatsApp/email support",
        "School comparison reports"
      ]
    },
    {
      title: "FREE Visa Application Support",
      value: "₦200,000 value",
      items: [
        "Document checklist & review",
        "Visa form completion assistance",
        "Interview preparation coaching"
      ]
    },
    {
      title: "FREE Post-Admission Services",
      value: "₦425,000 value",
      items: [
        "Accommodation assistance",
        "Flight booking guidance",
        "Airport pickup arrangement",
        "Pre-departure orientation webinar",
        "Alumni network access"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="font-semibold text-secondary">LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            🎁 NOVEMBER SPECIAL: Full-Service Package
          </h2>
          <p className="text-xl text-muted-foreground">Everything you need to study abroad – completely FREE</p>
        </div>

        <Card className="max-w-5xl mx-auto p-8 md:p-12 shadow-elevated border-4 border-secondary/30 animate-scale-in">
          {/* Value Header */}
          <div className="text-center mb-8 pb-8 border-b-2 border-dashed border-border">
            <p className="text-lg text-muted-foreground mb-2">Total Package Value</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <p className="text-4xl md:text-5xl font-bold text-primary line-through decoration-destructive">₦850,000</p>
              <div className="w-16 h-1 bg-secondary hidden md:block" />
              <p className="text-5xl md:text-6xl font-bold gradient-secondary bg-clip-text text-transparent">₦0</p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">You only pay school application fees (usually $50-$150 per school)</p>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-success" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                      <span className="text-secondary font-semibold">({benefit.value})</span>
                    </div>
                    <ul className="space-y-1">
                      {benefit.items.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-center gap-2">
                          <span className="w-1 h-1 bg-secondary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center pt-8 border-t-2 border-dashed border-border">
            <Button size="lg" className="gradient-secondary hover:opacity-90 transition-opacity text-lg font-bold px-8 py-6 h-auto">
              <Sparkles className="w-5 h-5 mr-2" />
              START MY APPLICATION NOW
            </Button>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
              <strong>Why is this free?</strong> We're compensated by our partner schools when you enroll – that's why our service is FREE to students. No hidden fees, ever.
            </p>
          </div>

          {/* Trust Badge */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              ✅ Verified by CAC Nigeria • Official ApplyBoard Partner • Trusted by 2,400+ Nigerian Students
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Offer;
