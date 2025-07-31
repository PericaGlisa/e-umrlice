import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Building2, Phone, Mail, MapPin, Star, Search, Clock, Shield } from 'lucide-react';

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

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState(mockCompanies);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredCompanies(mockCompanies);
      return;
    }

    const filtered = mockCompanies.filter(company => 
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Real-time search as user types
    if (!value.trim()) {
      setFilteredCompanies(mockCompanies);
    } else {
      const filtered = mockCompanies.filter(company => 
        company.name.toLowerCase().includes(value.toLowerCase()) ||
        company.location.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCompanies(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 pt-40 pb-12 flex-1">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="heading-large mb-6">Pogrebne firme</h1>
          
          <div className="glass-card p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Pretraži firme po nazivu ili mestu..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
              </div>
              <Button className="btn-elegant" onClick={handleSearch}>
                <Building2 className="w-4 h-4 mr-2" />
                Pretraži
              </Button>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
            <Card 
              key={company.id} 
              className="glass-card p-6 cursor-pointer hover:shadow-gold transition-all duration-300"
              onClick={() => window.location.href = `/company/${company.id}`}
            >
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-xl mb-1">{company.name}</h3>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(company.rating)
                                  ? 'text-primary-gold fill-current'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-2">({company.rating})</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {company.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 mr-2 text-primary-gold" />
                        {company.phone}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-primary-gold" />
                        {company.workingHours}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {company.services.slice(0, 3).map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                      {company.services.length > 3 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                          +{company.services.length - 3} više
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nema rezultata</h3>
              <p className="text-muted-foreground">
                Nema firmi koje odgovaraju vašoj pretrazi "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Companies;