import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Calendar, MapPin, User } from 'lucide-react';

// Mock data for Serbian-style obituaries with photos
const mockObituaries = [
  {
    id: 1,
    name: "Marko Petrović",
    birthDate: "15. mart 1945.",
    deathDate: "20. januar 2024.",
    age: 78,
    location: "Beograd",
    description: "Sa neizrecivom tugom i bolom u srcu obaveštavamo rodbinu, prijatelje i sve koji su ga poznavali da je u 79. godini života, posle kratke i teške bolesti, preminuo naš najvoljeniji",
    relationship: "suprug, otac, deda i prijatelj",
    family: "Supruga Milica, sin Miloš sa porodicom, ćerka Jovana sa porodicom i ostala rodbina",
    funeral: "Sahrana će se obaviti u subotu, 22. januara 2024. godine u 13:00 časova na groblju Novo groblje u Beogradu.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Ana Jovanović", 
    birthDate: "22. avgust 1952.",
    deathDate: "18. januar 2024.",
    age: 71,
    location: "Novi Sad",
    description: "Sa velikim bolom u srcu obaveštavamo rodbinu, prijatelje i sve koji su je poznavali da je u 72. godini života preminula naša najdraža",
    relationship: "majka, baba i prijateljica",
    family: "Sinovi Nemanja i Stefan sa porodicama, ćerka Milena sa porodicom i ostala rodbina",
    funeral: "Sahrana će se obaviti u ponedeljak, 21. januara 2024. godine u 14:00 časova na Uspeškom groblju u Novom Sadu.",
    photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Petar Milenković",
    birthDate: "10. novembar 1938.",
    deathDate: "15. januar 2024.",
    age: 85,
    location: "Kragujevac",
    description: "Sa dubokom tugom i velikim bolom u srcu obaveštavamo rodbinu, prijatelje i sve koji su ga poznavali da je u 86. godini života preminuo naš voljeni",
    relationship: "otac, deda i pradeda",
    family: "Sin Dragan sa porodicom, ćerka Gordana sa porodicom, unuci i praunuci",
    funeral: "Sahrana će se obaviti u utorak, 17. januara 2024. godine u 12:00 časova na Šumaričkom groblju u Kragujevcu.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  }
];

export const ObituarySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mockObituaries.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentObituary = mockObituaries[currentIndex];

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="heading-large mb-3 sm:mb-4 lg:mb-6">Poslednja počast</h2>
          <p className="text-elegant max-w-2xl mx-auto px-2 sm:px-0">
            Sa poštovanjem objavljujemo umrlice koje čuvaju uspomenu na naše najmilije
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="glass-card p-4 sm:p-8 lg:p-16 obituary-card bg-card/90 border-2 border-primary/20">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
              
              {/* Photo */}
              <div className="flex justify-center lg:justify-start w-full">
                <div className="relative">
                  <div className="w-48 h-60 sm:w-56 sm:h-70 lg:w-64 lg:h-80 rounded-2xl overflow-hidden border-4 border-primary shadow-gold">
                    <img 
                      src={currentObituary.photo} 
                      alt={currentObituary.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8 text-left w-full">
                {/* Header */}
                <div className="space-y-2 sm:space-y-4">
                  <div className="text-center border-b border-primary/30 pb-2 sm:pb-4">
                    <div className="text-sm sm:text-lg font-ui text-primary mb-1 sm:mb-2">UMRLICA</div>
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold text-foreground obituary-name leading-tight">
                      {currentObituary.name}
                    </h3>
                    <div className="text-sm sm:text-lg lg:text-2xl text-muted-foreground mt-1 sm:mt-2 obituary-dates">
                      ({currentObituary.birthDate} - {currentObituary.deathDate})
                    </div>
                  </div>
                </div>

                {/* Main text */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 obituary-content">
                  <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-foreground font-body">
                    {currentObituary.description} <strong className="text-primary">{currentObituary.relationship}</strong>
                  </p>
                  
                  <div className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-center text-primary py-2 sm:py-3 lg:py-4">
                    {currentObituary.name}
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-foreground">
                    <strong>Ožalošćeni:</strong> {currentObituary.family}
                  </p>

                  <div className="bg-primary/10 p-3 sm:p-4 lg:p-6 rounded-xl border border-primary/20">
                    <p className="text-sm sm:text-base lg:text-lg font-ui text-foreground">
                      <strong>Sahrana:</strong> {currentObituary.funeral}
                    </p>
                    <div className="flex items-center mt-2 text-primary">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="font-ui text-sm sm:text-base">{currentObituary.location}</span>
                    </div>
                  </div>

                  <div className="text-center pt-3 sm:pt-4 lg:pt-6 border-t border-primary/20">
                    <p className="text-sm sm:text-base lg:text-lg font-heading italic text-muted-foreground">
                      "Počivaj u miru. Ostaćeš zauvek u našim srcima."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 sm:space-x-3 pt-6 sm:pt-8 lg:pt-12 mt-6 sm:mt-8 lg:mt-12 border-t border-primary/20">
              {mockObituaries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentIndex 
                      ? 'bg-primary scale-125 shadow-gold' 
                      : 'bg-muted hover:bg-primary/50 active:bg-primary/70'
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};