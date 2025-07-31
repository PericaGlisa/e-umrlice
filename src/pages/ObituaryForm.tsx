import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Heart, Upload, Calendar, MapPin, Phone, Mail, User, FileText, Eye, Zap, Crown } from 'lucide-react';

const ObituaryForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPackage = location.state?.selectedPackage || 'basic';

  const packageInfo = {
    basic: { name: 'Osnovni paket', price: '2.500', icon: Eye },
    premium: { name: 'Premium paket', price: '4.500', icon: Zap },
    elite: { name: 'Elite paket', price: '7.500', icon: Crown }
  };

  const [formData, setFormData] = useState({
    // Main required fields
    textAboveImage: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    deathDate: '',
    content: '',
    mourners: '',
    
    // File uploads
    photos: null as FileList | null,
    deathCertificate: null as FileList | null,
    
    // Additional existing fields
    birthPlace: '',
    deathPlace: '',
    funeralInfo: '',
    
    // Publisher info
    publisherName: '',
    publisherEmail: '',
    publisherPhone: '',
    relationship: '',
    
    // Additional info
    displayLocations: [] as string[],
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    navigate('/success');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.files }));
  };

  const currentPackage = packageInfo[selectedPackage as keyof typeof packageInfo];
  const IconComponent = currentPackage.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 pt-40 pb-12 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Package Info */}
          <Card className="glass-card p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-heading font-semibold text-lg">{currentPackage.name}</h2>
                  <p className="text-sm text-muted-foreground">Izabrani paket</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-heading font-bold text-primary-gold">
                  {currentPackage.price} RSD
                </div>
                <Badge variant="secondary" className="mt-1">
                  Aktivno
                </Badge>
              </div>
            </div>
          </Card>

          <div className="text-center mb-8">
            <h1 className="heading-large mb-4">Forma za unos umrlice</h1>
            <p className="text-elegant">
              Molimo vas da pažljivo unesete sve potrebne informacije. Svi podaci su obavezni osim ako nije drugačije naznačeno.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Main Form Fields */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-6 h-6 text-primary-gold" />
                <h3 className="font-heading font-semibold text-xl">Osnovni podaci</h3>
              </div>

              <div className="space-y-6">
                {/* Tekst iznad slike */}
                <div className="space-y-2">
                  <Label htmlFor="textAboveImage" className="font-ui">Tekst iznad slike</Label>
                  <Input
                    id="textAboveImage"
                    value={formData.textAboveImage}
                    onChange={(e) => handleInputChange('textAboveImage', e.target.value)}
                    placeholder="Tekst koji će se prikazati iznad fotografije"
                  />
                </div>

                {/* Dugme za unos Fotografije */}
                <div className="space-y-2">
                  <Label htmlFor="photos" className="font-ui">Dugme za unos fotografije</Label>
                  <Input
                    id="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileChange('photos', e)}
                    className="items-center file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:mt-0.5"
                  />
                  <p className="text-xs text-muted-foreground">
                    {selectedPackage === 'basic' && 'Osnovni paket ne uključuje fotografije'}
                    {selectedPackage === 'premium' && 'Možete dodati do 5 fotografija'}
                    {selectedPackage === 'elite' && 'Neograničen broj fotografija'}
                  </p>
                </div>

                {/* Dugme za unos fajla potvrde o smrti */}
                <div className="space-y-2">
                  <Label htmlFor="deathCertificate" className="font-ui">Dugme za unos fajla potvrde o smrti</Label>
                  <Input
                    id="deathCertificate"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange('deathCertificate', e)}
                    className="items-center file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:mt-0.5"
                  />
                  <p className="text-xs text-muted-foreground">
                    Prihvataju se PDF, JPG, JPEG i PNG fajlovi
                  </p>
                </div>

                {/* Ime i prezime */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-ui">Ime *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Marko"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-ui">Prezime *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Petrović"
                      required
                    />
                  </div>
                </div>

                {/* Datum rođenja i smrti */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate" className="font-ui">Datum rođenja</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-white z-10" />
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className="pl-10"
                        lang="sr-RS"
                        placeholder="dd.mm.yyyy"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deathDate" className="font-ui">Datum smrti</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-white z-10" />
                      <Input
                        id="deathDate"
                        type="date"
                        value={formData.deathDate}
                        onChange={(e) => handleInputChange('deathDate', e.target.value)}
                        className="pl-10"
                        lang="sr-RS"
                        placeholder="dd.mm.yyyy"
                      />
                    </div>
                  </div>
                </div>

                {/* Sadržaj */}
                <div className="space-y-2">
                  <Label htmlFor="content" className="font-ui">Sadržaj *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => handleInputChange('content', e.target.value)}
                    placeholder="Sa tugom obaveštavamo da nas je napustio naš dragi..."
                    className="min-h-32"
                    required
                  />
                </div>

                {/* Ožalošćeni */}
                <div className="space-y-2">
                  <Label htmlFor="mourners" className="font-ui">Ožalošćeni</Label>
                  <Textarea
                    id="mourners"
                    value={formData.mourners}
                    onChange={(e) => handleInputChange('mourners', e.target.value)}
                    placeholder="Supruga Ana, sin Marko, ćerka Milica..."
                    className="min-h-24"
                  />
                </div>
              </div>
            </Card>

            {/* Additional Information */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-primary-gold" />
                <h3 className="font-heading font-semibold text-xl">Dodatne informacije</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="birthPlace" className="font-ui">Mesto rođenja</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="birthPlace"
                      value={formData.birthPlace}
                      onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                      placeholder="Beograd"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deathPlace" className="font-ui">Mesto smrti</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="deathPlace"
                      value={formData.deathPlace}
                      onChange={(e) => handleInputChange('deathPlace', e.target.value)}
                      placeholder="Beograd"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="funeralInfo" className="font-ui">Informacije o sahrani</Label>
                <Textarea
                  id="funeralInfo"
                  value={formData.funeralInfo}
                  onChange={(e) => handleInputChange('funeralInfo', e.target.value)}
                  placeholder="Sahrana će se održati dana... u... satu na..."
                  className="min-h-24"
                />
              </div>
            </Card>

            {/* Publisher Information */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <User className="w-6 h-6 text-primary-gold" />
                <h3 className="font-heading font-semibold text-xl">Podaci o objavljivaču</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="publisherName" className="font-ui">Ime i prezime *</Label>
                  <Input
                    id="publisherName"
                    value={formData.publisherName}
                    onChange={(e) => handleInputChange('publisherName', e.target.value)}
                    placeholder="Ana Petrović"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="relationship" className="font-ui">Srodstvo *</Label>
                  <Input
                    id="relationship"
                    value={formData.relationship}
                    onChange={(e) => handleInputChange('relationship', e.target.value)}
                    placeholder="Supruga, sin, ćerka..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publisherEmail" className="font-ui">Email adresa *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="publisherEmail"
                      type="email"
                      value={formData.publisherEmail}
                      onChange={(e) => handleInputChange('publisherEmail', e.target.value)}
                      placeholder="ana@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publisherPhone" className="font-ui">Telefon *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="publisherPhone"
                      value={formData.publisherPhone}
                      onChange={(e) => handleInputChange('publisherPhone', e.target.value)}
                      placeholder="+381 11 123 4567"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Special Requests */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Upload className="w-6 h-6 text-primary-gold" />
                <h3 className="font-heading font-semibold text-xl">Posebni zahtevi</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequests" className="font-ui">Posebni zahtevi</Label>
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  placeholder="Bilo koji dodatni zahtevi ili napomene..."
                  className="min-h-24"
                />
              </div>
            </Card>

            {/* Payment Information */}
            <Card className="glass-card p-6 bg-gradient-to-r from-primary-gold/5 to-primary-gold/10 border-primary-gold/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">i</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-gold">Načini plaćanja</h3>
              </div>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Elektronsko plaćanje:</strong> Možete platiti karticom direktno kroz naš siguran sistem plaćanja nakon potvrde umrlice.</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Plaćanje uplatnicom:</strong> Nakon slanja forme, dobićete uplatnicu na email adresu sa svim potrebnim podacima za plaćanje.</span>
                </p>
                <p className="text-xs mt-4 p-3 bg-background/50 rounded-lg border border-primary-gold/20">
                  <strong>Napomena:</strong> Umrlica će biti objavljena nakon potvrde uplate. Za hitne slučajeve, preporučujemo elektronsko plaćanje radi bržeg procesuiranja.
                </p>
              </div>
            </Card>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button type="button" variant="outline" className="btn-glass" onClick={() => navigate('/packages')}>
                Nazad na pakete
              </Button>
              <Button type="submit" className="btn-hero flex-1">
                Objavi umrlicu - {currentPackage.price} RSD
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ObituaryForm;