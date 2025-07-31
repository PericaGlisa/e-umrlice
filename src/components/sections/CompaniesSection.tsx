import { Button } from '@/components/ui/button';
import { Building2, MapPin, Phone, Star, Award, Users, Clock } from 'lucide-react';

const companies = [
  {
    id: 1,
    name: "Pogrebno preduzeće Beograd",
    type: "Javno komunalno",
    description: "Najstarije i najveće pogrebno preduzeće u Beogradu sa preko 70 godina tradicije.",
    rating: 4.8,
    reviews: 156,
    location: "Beograd",
    phone: "+381 11 123 4567",
    services: ["Organizacija sahrane", "Transport", "Kremacija", "Spomenici"],
    isVerified: true,
    logo: "🏛️"
  },
  {
    id: 2, 
    name: "Memoria Novi Sad",
    type: "Privatno",
    description: "Moderno pogrebno preduzeće sa fokusom na personalizovane usluge i digitalnu podršku.",
    rating: 4.9,
    reviews: 89,
    location: "Novi Sad",
    phone: "+381 21 123 4567", 
    services: ["24/7 usluge", "Digitalne umrlice", "Cvećarnica", "Katering"],
    isVerified: true,
    logo: "🌹"
  },
  {
    id: 3,
    name: "Familia Niš",
    type: "Privatno",
    description: "Porodično pogrebno preduzeće koje pruža brižne i dostojne usluge sa ličnim pristupom.",
    rating: 4.7,
    reviews: 124,
    location: "Niš",
    phone: "+381 18 123 4567",
    services: ["Porodične ceremonije", "Ortodoksne sahrane", "Memorijali", "Konsultacije"],
    isVerified: false,
    logo: "⛪"
  }
];

export const CompaniesSection = () => {
  return (
    <section id="companies" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-large">Pogrebne firme</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Verifikovane pogrebne firme koje koriste našu platformu za objavljivanje umrlica.
            Javna komunalna i privatna preduzeća sa dugogodišnjom tradicijom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div key={company.id} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                    {company.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground">{company.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-ui ${
                        company.type === "Javno komunalno" 
                          ? "bg-accent-teal text-accent-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {company.type}
                      </span>
                      {company.isVerified && (
                        <div title="Verifikovana firma">
                          <Award className="w-4 h-4 text-primary-gold" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
                {company.description}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-ui font-semibold">{company.rating}</span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-ui">{company.reviews} recenzija</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-gold" />
                  <span className="font-ui">{company.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-primary-gold" />
                  <span className="font-ui">{company.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-primary-gold" />
                  <span className="font-ui text-muted-foreground">Dostupno 24/7</span>
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <h4 className="text-sm font-ui font-semibold mb-2">Usluge:</h4>
                <div className="flex flex-wrap gap-2">
                  {company.services.map((service, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md font-ui"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 btn-glass text-xs"
                  onClick={() => window.location.href = `/companies/${company.id}`}
                >
                  Profil firme
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 btn-elegant text-xs"
                  onClick={() => window.location.href = `tel:${company.phone}`}
                >
                  Kontakt
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for Companies */}
        <div className="mt-16">
          <div className="glass-card p-8 text-center max-w-4xl mx-auto">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-primary-gold" />
            <h3 className="text-2xl font-heading font-bold mb-4">Pridružite se našoj platformi</h3>
            <p className="text-elegant mb-6">
              Registrujte svoju pogrebnu firmu i omogućite klijentima da objavljuju umrlice direktno kroz vašu firmu.
              Dobijte pristup analitici, upravljanju klijentima i dodatnim digitalnim uslugama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <Building2 className="w-5 h-5 mr-2" />
                Registruj firmu
              </Button>
              <Button variant="outline" className="btn-glass">
                Saznaj više
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};