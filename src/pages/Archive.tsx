import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Search, Filter, Calendar, User, Clock } from 'lucide-react';

// Mock data for obituaries
const mockObituaries = [
  {
    id: 1,
    name: "Marko Petrović",
    birthDate: "1945-03-15",
    deathDate: "2024-01-20",
    location: "Beograd",
    description: "Sa tugom obaveštavamo da nas je napustio naš dragi Marko Petrović. Bio je volen otac, deda i prijatelj svima koji su ga poznavali.",
    funeral: "2024-01-22, 14:00, Novo groblje Beograd",
    family: "Porodica Petrović",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Ana Jovanović", 
    birthDate: "1952-08-22",
    deathDate: "2024-01-18",
    location: "Novi Sad",
    description: "Napustila nas je naša draga majka Ana Jovanović. Ostaje u našim srcima zauvek.",
    funeral: "2024-01-20, 15:00, Uspenje Presvete Bogorodice",
    family: "Porodica Jovanović",
    image: "/placeholder.svg"
  }
];

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedObituary, setSelectedObituary] = useState<any>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sr-RS', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatFuneralDateTime = (funeralString: string) => {
    // Parse "2024-01-22, 14:00, Novo groblje Beograd" format
    const parts = funeralString.split(', ');
    if (parts.length >= 2) {
      const dateStr = parts[0];
      const timeStr = parts[1];
      const location = parts.slice(2).join(', ');
      
      const date = new Date(dateStr);
      const formattedDate = date.toLocaleDateString('sr-RS', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      
      return `${formattedDate}, ${timeStr}${location ? `, ${location}` : ''}`;
    }
    return funeralString;
  };

  const filteredObituaries = mockObituaries.filter(obituary =>
    obituary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    obituary.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 pt-40 pb-12 flex-1">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <h1 className="heading-large mb-6">Arhiva umrlica</h1>
          
          <div className="glass-card p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Pretraži po imenu ili mestu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  type="date"
                  placeholder="dd.mm.yyyy"
                  className="pl-10"
                  lang="sr-RS"
                />
              </div>
              <Button className="btn-elegant">
                <Filter className="w-4 h-4 mr-2" />
                Filtriraj
              </Button>
            </div>
          </div>
        </div>

        {/* Obituaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredObituaries.map((obituary) => (
            <Dialog key={obituary.id}>
              <DialogTrigger asChild>
                <Card className="glass-card p-6 cursor-pointer hover:shadow-gold transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={obituary.image} 
                          alt={obituary.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg">{obituary.name}</h3>
                        <p className="text-sm text-muted-foreground">{obituary.location}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(obituary.birthDate)} - {formatDate(obituary.deathDate)}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        {obituary.family}
                      </div>
                    </div>
                    
                    <p className="text-sm line-clamp-3">{obituary.description}</p>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                      <img 
                        src={obituary.image} 
                        alt={obituary.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="heading-large">{obituary.name}</h2>
                      <p className="text-lg text-muted-foreground">
                        {formatDate(obituary.birthDate)} - {formatDate(obituary.deathDate)}
                      </p>
                      <p className="text-primary-gold font-medium">{obituary.location}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Umrlica</h3>
                      <p className="text-elegant">{obituary.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Detalji sahrane</h3>
                      <p className="text-elegant">{formatFuneralDateTime(obituary.funeral)}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Objavio</h3>
                      <p className="text-elegant">{obituary.family}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Archive;