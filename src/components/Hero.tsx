import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/scholarix-logo.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };
  return (
    <section className="relative min-h-[90vh] gradient-hero py-12 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img src={logo} alt="Scholarix Logo" className="h-12 md:h-16" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                Your Dream of Studying Abroad Starts Here – 
                <span className="text-secondary"> Guaranteed Admission in 90 Days</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Access <span className="font-semibold text-primary">1,500+ international schools</span> offering <span className="font-semibold text-primary">140,000+ programs</span> across USA, Canada, UK, Australia & more. 
                <span className="block mt-2 font-semibold text-foreground">Scholarix + ApplyBoard have helped 800,000+ students get accepted. You're next.</span>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">93%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">60-90</p>
                  <p className="text-sm text-muted-foreground">Days to Admission</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <Card className="p-6 md:p-8 shadow-elevated border-2 border-primary/10 animate-scale-in bg-card/95 backdrop-blur">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
                <p className="text-secondary font-semibold text-sm">🎓 FREE Assessment Worth ₦75,000</p>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Get Started Today</h3>
              <p className="text-muted-foreground">Fill out this form and receive your personalized admission assessment within 24 hours</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Your Full Name*</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp Number*</Label>
                <Input id="phone" type="tel" placeholder="+234 XXX XXX XXXX" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address*</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Study Destination</Label>
                <Select>
                  <SelectTrigger id="destination">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Study Level</Label>
                <Select>
                  <SelectTrigger id="level">
                    <SelectValue placeholder="Select study level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="language">Language Course</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Current Education</Label>
                <Select>
                  <SelectTrigger id="education">
                    <SelectValue placeholder="Select current education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="secondary">Secondary School</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full gradient-secondary hover:opacity-90 transition-opacity text-lg font-bold">
                GET MY FREE ASSESSMENT NOW
              </Button>

              <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Results in 24 hours | No obligation
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
