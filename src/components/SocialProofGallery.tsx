import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import graduateCanada from "@/assets/graduate-canada.jpg";
import graduateUK from "@/assets/graduate-uk.jpg";
import graduateUSA from "@/assets/graduate-usa.jpg";
import graduateAustralia from "@/assets/graduate-australia.jpg";

const SocialProofGallery = () => {
  const graduates = [
    {
      image: graduateCanada,
      country: "Canada",
      university: "University of Toronto",
      flag: "🇨🇦",
      name: "Success Story"
    },
    {
      image: graduateUK,
      country: "United Kingdom",
      university: "Oxford University",
      flag: "🇬🇧",
      name: "Success Story"
    },
    {
      image: graduateUSA,
      country: "United States",
      university: "American University",
      flag: "🇺🇸",
      name: "Success Story"
    },
    {
      image: graduateAustralia,
      country: "Australia",
      university: "Australian University",
      flag: "🇦🇺",
      name: "Success Story"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="mb-4 bg-success/10 text-success border-success/20 text-sm px-4 py-2">
            Real Students, Real Success
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nigerian Students Graduating Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Nigerian students who have successfully graduated from top universities across the globe through Scholarix
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {graduates.map((graduate, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-card hover:shadow-elevated transition-all hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={graduate.image} 
                  alt={`Graduate from ${graduate.country}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold text-sm">Scholarix Graduate</p>
                  <p className="text-xs opacity-90">{graduate.university}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="text-3xl mb-2">{graduate.flag}</div>
                <h3 className="font-bold text-foreground mb-1">{graduate.country}</h3>
                <p className="text-sm text-muted-foreground">{graduate.name}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 shadow-card">
            <p className="text-sm text-muted-foreground mb-2">You could be next! 🎓</p>
            <p className="text-2xl font-bold text-primary">2,400+ Nigerian Students Placed</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialProofGallery;
