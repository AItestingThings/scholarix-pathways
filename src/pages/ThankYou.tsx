import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/scholarix-logo.png";

const ThankYou = () => {
  return (
    <div className="min-h-screen gradient-hero py-12 px-4 flex items-center justify-center">
      <div className="container mx-auto max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8 animate-fade-in-up">
          <Link to="/">
            <img src={logo} alt="Scholarix Logo" className="h-12 md:h-16 mx-auto" />
          </Link>
        </div>

        <Card className="p-8 md:p-12 shadow-elevated border-2 border-primary/10 animate-scale-in bg-card/95 backdrop-blur text-center">
          <div className="mb-6">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-success" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Congratulations on Taking the First Step!
            </h1>
          </div>

          <div className="space-y-6 text-left">
            <p className="text-lg text-foreground">
              Thank you for reaching out to <span className="font-semibold text-primary">Scholarix</span>. You have just made one of the best decisions toward securing your admission abroad.
            </p>

            <p className="text-lg text-foreground">
              We have received your submission, and our experienced team, trusted for years to deliver successful admissions, will review it and contact you within the next <span className="font-semibold text-secondary">24 hours</span>. Rest assured, you are in safe hands, and we are fully committed to helping you secure your admission.
            </p>

            <p className="text-lg text-foreground">
              We look forward to speaking with you very soon.
            </p>

            <p className="text-lg font-bold text-primary">
              Scholarix Team
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
