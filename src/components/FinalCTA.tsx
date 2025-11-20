import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Clock, Shield, Star, TrendingUp } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Take the First Step Toward Your <span className="text-secondary">International Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 2,400+ Nigerian students who trusted Scholarix with their study abroad dreams
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Primary CTA */}
          <Card className="p-8 md:p-12 shadow-elevated border-4 border-secondary/30 text-center animate-scale-in">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
                <TrendingUp className="w-5 h-5 text-success" />
                <span className="font-semibold text-success">🔥 READY TO START YOUR APPLICATION?</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Get Your FREE Assessment Now
              </h3>
              <p className="text-muted-foreground mb-6">
                Receive personalized school recommendations within 24 hours
              </p>
            </div>

            <Button size="lg" className="gradient-secondary hover:opacity-90 transition-opacity text-lg font-bold px-12 py-6 h-auto mb-4 w-full md:w-auto">
              GET FREE ASSESSMENT NOW
            </Button>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Results in 24 hours</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
            </div>
          </Card>

          {/* Secondary CTA */}
          <Card className="p-8 shadow-card text-center animate-fade-in-up">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                📞 Prefer to Talk to Someone?
              </h3>
              <p className="text-muted-foreground">
                Speak with our education counselors directly
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full md:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call: 0916 798 2089
              </Button>
              <Button size="lg" variant="outline" className="border-success text-success hover:bg-success hover:text-white w-full md:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: 0916 798 2089
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Available: Mon-Sat, 9AM-7PM WAT
            </p>
          </Card>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center shadow-card hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-success" />
              </div>
              <p className="font-bold text-2xl text-foreground mb-1">2,400+</p>
              <p className="text-sm text-muted-foreground">Nigerian Students Processed</p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-secondary" />
              </div>
              <p className="font-bold text-2xl text-foreground mb-1">4.8/5</p>
              <p className="text-sm text-muted-foreground">Rating (Google Reviews)</p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p className="font-bold text-lg text-foreground mb-1">Official Partner</p>
              <p className="text-sm text-muted-foreground">ApplyBoard Verified</p>
            </Card>
          </div>

          {/* Trust Seals */}
          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-success" />
                <span>Secure Application</span>
              </div>
              <span>|</span>
              <span>🇳🇬 CAC Registered</span>
              <span>|</span>
              <span>ApplyBoard Verified</span>
              <span>|</span>
              <span>BBB Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
