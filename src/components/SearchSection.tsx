import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Search, Filter, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [dateRange, setDateRange] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to archive with search parameters
    const params = new URLSearchParams();
    if (searchTerm) params.append('search', searchTerm);
    if (location) params.append('location', location);
    if (dateRange) params.append('date', dateRange);
    
    navigate(`/archive?${params.toString()}`);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="heading-large mb-4">Pretraži umrlice</h2>
            <p className="text-elegant">
              Pronađite informacije o sahranama i umrlicama na teritoriji Republike Srbije
            </p>
          </div>

          <Card className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Search by name */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Ime i prezime..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Location filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground z-10" />
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Mesto..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beograd">Beograd</SelectItem>
                    <SelectItem value="novi-sad">Novi Sad</SelectItem>
                    <SelectItem value="nis">Niš</SelectItem>
                    <SelectItem value="kragujevac">Kragujevac</SelectItem>
                    <SelectItem value="subotica">Subotica</SelectItem>
                    <SelectItem value="pancevo">Pančevo</SelectItem>
                    <SelectItem value="cacak">Čačak</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date filter */}
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground z-10" />
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Period..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Danas</SelectItem>
                    <SelectItem value="week">Poslednja nedelja</SelectItem>
                    <SelectItem value="month">Poslednji mesec</SelectItem>
                    <SelectItem value="3months">Poslednja 3 meseca</SelectItem>
                    <SelectItem value="year">Poslednja godina</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search button */}
              <Button onClick={handleSearch} className="btn-hero">
                <Search className="w-4 h-4 mr-2" />
                Pretraži
              </Button>
            </div>

            {/* Advanced filters */}
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="btn-glass">
                <Filter className="w-3 h-3 mr-1" />
                Napredni filteri
              </Button>
              <Button variant="outline" size="sm" className="btn-glass">
                Sahrane danas
              </Button>
              <Button variant="outline" size="sm" className="btn-glass">
                Najnovije umrlice
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};