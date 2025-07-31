import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Crown, Shield, Users, Eye, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    id: 'basic',
    name: 'Osnovni paket',
    price: '2.500',
    duration: '7 dana',
    icon: Eye,
    popular: false,
    features: [
      'Objava na web portalu',
      'Osnovni template',
      'Objava do 7 dana',
      'Email podrška',
      'Osnovne analitike'
    ],
    description: 'Idealan za osnovne potrebe objavljivanja umrlica'
  },
  {
    id: 'premium',
    name: 'Premium paket',
    price: '4.500',
    duration: '14 dana',
    icon: Zap,
    popular: true,
    features: [
      'Objava na web portalu',
      'Objava na javnim displejima',
      'Premium template',
      'Objava do 14 dana',
      '24/7 podrška',
      'Detaljne analitike',
      'Galerija slika (do 5)',
      'Personalizovana poruka'
    ],
    description: 'Najčešći izbor - kombinuje web i javne displeje'
  },
  {
    id: 'elite',
    name: 'Elite paket',
    price: '7.500',
    duration: '30 dana',
    icon: Crown,
    popular: false,
    features: [
      'Sve iz Premium paketa',
      'Prilagođeni design',
      'Objava do 30 dana',
      'Video memorijal (do 2 min)',
      'Neograničene slike',
      'Premium lokacije displeja',
      'Prioritetna podrška',
      'Memorijalna stranica',
      'QR kod za grobno mesto'
    ],
    description: 'Kompletno rešenje za dostojno pamćenje'
  }
];

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
    navigate('/form', { state: { selectedPackage: packageId } });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 pt-40 pb-12 flex-1">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="heading-display mb-6">Cenovni paketi</h1>
          <p className="text-elegant max-w-2xl mx-auto">
            Odaberite paket koji najbolje odgovara vašim potrebama. Svi paketi uključuju profesionalnu podršku i dostojno prikazivanje.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <Card 
                key={pkg.id}
                className={`glass-card p-8 relative flex flex-col ${
                  pkg.popular ? 'ring-2 ring-primary-gold shadow-gold' : ''
                } hover:shadow-elegant transition-all duration-300`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-gold text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Najpopularniji
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${
                    pkg.popular ? 'bg-gradient-primary' : 'bg-secondary'
                  } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-large mb-2">{pkg.name}</h3>
                  <div className="space-y-1">
                    <div className="text-3xl font-heading font-bold text-primary-gold">
                      {pkg.price} RSD
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    pkg.popular ? 'btn-hero' : 'btn-elegant'
                  }`}
                  onClick={() => handleSelectPackage(pkg.id)}
                >
                  Izaberi paket
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-primary-gold" />
              <h3 className="font-heading font-semibold text-lg">Garantovana sigurnost</h3>
            </div>
            <p className="text-elegant">
              Svi naši paketi su sigurni i zaštićeni. Vaši podaci se čuvaju prema GDPR standardima, 
              a plaćanje se vrši preko bezbednih kriptovanih kanala.
            </p>
          </Card>

          <Card className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-primary-gold" />
              <h3 className="font-heading font-semibold text-lg">24/7 podrška</h3>
            </div>
            <p className="text-elegant">
              Naš tim je dostupan 24 sata dnevno za sve vaše potrebe. Kontaktirajte nas putem 
              telefona, email-a ili chat-a za bilo kakvu pomoć.
            </p>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Packages;