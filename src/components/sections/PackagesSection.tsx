import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Shield } from 'lucide-react';

const packages = [
  {
    name: "Osnovni",
    price: 2000,
    duration: 3,
    cities: ["Beograd"],
    icon: Shield,
    features: [
      "Objavljivanje na portalu",
      "3 dana aktivnosti", 
      "Osnovna lokacija",
      "Email podrška"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: 5000,
    duration: 7,
    cities: ["Beograd", "Novi Sad", "Niš"],
    icon: Star,
    features: [
      "Objavljivanje na portalu",
      "7 dana aktivnosti",
      "3 glavna grada",
      "Javni displеji",
      "Mogućnost editovanja",
      "Prioritetni prikaz",
      "24/7 podrška"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: 10000,
    duration: 14,
    cities: ["Cela Srbija"],
    icon: Crown,
    features: [
      "Objavljivanje na portalu",
      "14 dana aktivnosti",
      "Svi gradovi Srbije",
      "Premium javni displеji",
      "Neograničeno editovanje",
      "Izdvojen prikaz",
      "Analitika pregleda",
      "Dedicirani menadžer",
      "PDF sertifikat"
    ],
    popular: false
  }
];

export const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-large">Cenovni paketi</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Izaberite paket koji najbolje odgovara vašim potrebama. Svi paketi uključuju digitalno objavljivanje
            sa mogućnošću prikaza na javnim displejima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  pkg.popular
                    ? 'glass-card border-primary-gold shadow-gold'
                    : 'glass-card hover:shadow-glass'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-ui font-semibold">
                      Najpopularniji
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center space-y-4 mb-8">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                    pkg.popular ? 'bg-gradient-primary shadow-gold' : 'bg-muted'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      pkg.popular ? 'text-primary-foreground' : 'text-foreground'
                    }`} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-heading font-bold">{pkg.name}</h3>
                    <p className="text-muted-foreground font-ui">
                      {pkg.cities.length === 1 ? pkg.cities[0] : `${pkg.cities.length} gradova`}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-4xl font-heading font-bold text-foreground">
                      {pkg.price.toLocaleString('sr-RS')}
                      <span className="text-lg text-muted-foreground ml-1">RSD</span>
                    </div>
                    <div className="text-sm text-muted-foreground font-ui">
                      {pkg.duration} dana aktivnosti
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary-gold flex-shrink-0" />
                      <span className="text-sm font-ui text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button 
                  className={`w-full ${
                    pkg.popular ? 'btn-hero' : 'btn-elegant'
                  }`}
                >
                  Izaberi paket
                </Button>

                {/* Cities Detail */}
                {pkg.cities.length > 1 && pkg.cities[0] !== "Cela Srbija" && (
                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <div className="text-xs text-muted-foreground font-ui text-center">
                      Gradovi: {pkg.cities.join(", ")}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-heading font-semibold mb-4">Potrebna je pomoć?</h4>
            <p className="text-sm text-muted-foreground font-ui mb-4">
              Naš tim je dostupan da vam pomogne u izboru pravog paketa i objavljivanju umrlice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="btn-glass">
                Kontaktiraj nas
              </Button>
              <Button variant="outline" className="btn-glass">
                Česta pitanja
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};