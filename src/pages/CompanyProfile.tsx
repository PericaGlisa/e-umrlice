import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building2, Phone, Mail, MapPin, Star, Clock, Shield, ArrowLeft } from 'lucide-react';

// Mock data for companies
const mockCompanies = [
  {
    id: 1,
    name: "Pogrebno preduzeće Centar",
    location: "Beograd, Centar",
    phone: "+381 11 123 4567",
    email: "info@centar-pogrebne.rs",
    rating: 4.8,
    services: ["Sahrane", "Kremiranje", "Transport pokojnika", "Cveće i venčici"],
    workingHours: "24/7 - Non-stop",
    description: "Profesionalne pogrebne usluge sa dugogodišnjim iskustvom. Pružamo kompletne usluge sahrane sa poštovanjem tradicije i želja porodice.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Večni dom",
    location: "Novi Sad",
    phone: "+381 21 987 6543",
    email: "kontakt@vecnidom.rs",
    rating: 4.6,
    services: ["Sahrane", "Kremiranje", "Memorijalni servisi", "Grobnice"],
    workingHours: "00:00 - 24:00",
    description: "Pružamo dostojne pogrebne usluge sa posebnom pažnjom na individualne potrebe svake porodice.",
    image: "/placeholder.svg"
  }
];

const CompanyProfile = () => {
  const { id } = useParams();
  const company = mockCompanies.find(c => c.id === parseInt(id || '1'));

  if (!company) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="container mx-auto px-4 pt-40 pb-12 flex-1">
          <div className="text-center">
            <h1 className="heading-large mb-4">Firma nije pronađena</h1>
            <Button onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nazad
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 pt-40 pb-12 flex-1">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Nazad na listu firmi
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card p-8">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h1 className="heading-large mb-2">{company.name}</h1>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(company.rating)
                            ? 'text-primary-gold fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-muted-foreground ml-2">({company.rating})</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Shield className="w-4 h-4 mr-2" />
                    Verifikovana firma
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading font-semibold text-xl mb-4">O nama</h2>
                <p className="text-elegant leading-relaxed">{company.description}</p>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h2 className="font-heading font-semibold text-xl mb-4">Naše usluge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {company.services.map((service, index) => (
                  <div key={index} className="flex items-center p-4 bg-secondary/10 rounded-lg">
                    <div className="w-3 h-3 bg-primary-gold rounded-full mr-3"></div>
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card className="glass-card p-6 sticky top-32">
              <h3 className="font-heading font-semibold text-lg mb-4">Kontakt informacije</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary-gold" />
                  <div>
                    <p className="font-medium">{company.phone}</p>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary-gold" />
                  <div>
                    <p className="font-medium">{company.email}</p>
                    <p className="text-sm text-muted-foreground">Email</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-primary-gold" />
                  <div>
                    <p className="font-medium">{company.workingHours}</p>
                    <p className="text-sm text-muted-foreground">Radno vreme</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary-gold" />
                  <div>
                    <p className="font-medium">{company.location}</p>
                    <p className="text-sm text-muted-foreground">Adresa</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <Button className="btn-hero w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Pozovi sada
                </Button>
                <Button variant="outline" className="btn-glass w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Pošalji email
                </Button>
                <Button variant="outline" className="btn-glass w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  Prikaži na mapi
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyProfile;