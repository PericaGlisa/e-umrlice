import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Heart, User, Clock, Building2 } from 'lucide-react';

const recentObituaries = [
  {
    id: 1,
    fullName: "Милица Петровић",
    birthDate: "1945-03-15",
    deathDate: "2024-07-25", 
    location: "Београд",
    content: "У 79. години живота преминула је наша драга мајка, бака и прабака Милица. Била је жена великог срца, посвећена својој породици...",
    mourners: "Син Петар, снаха Марија, унуци Милош и Ана са породицама",
    photo: "👵",
    isFeature: true,
    publishedBy: "Погребно предузеће Београд"
  },
  {
    id: 2,
    fullName: "Др Душан Николић",
    birthDate: "1960-08-20",
    deathDate: "2024-07-24",
    location: "Нови Сад", 
    content: "Изненадно нас је напустио наш драги супруг, отац и деда. Био је угледан лекар који је своју каријеру посветио помагању другима...",
    mourners: "Супруга Весна, деца Марко и Јелена, унуци",
    photo: "👨‍⚕️",
    isFeature: false,
    publishedBy: "Memoria Novi Sad"
  },
  {
    id: 3,
    fullName: "Ана Јовановић",
    birthDate: "1932-12-10", 
    deathDate: "2024-07-23",
    location: "Ниш",
    content: "У 92. години преминула је наша вољена мама и бака Ана. Живела је дуг и испуњен живот, окружена љубављу своје породице...",
    mourners: "Син Драган, ћерке Радмила и Гордана са породицама",
    photo: "👩‍🦳",
    isFeature: false,
    publishedBy: "Familia Niš"
  }
];

export const ObituariesSection = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sr-RS', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const calculateAge = (birth: string, death: string) => {
    const birthDate = new Date(birth);
    const deathDate = new Date(death);
    return deathDate.getFullYear() - birthDate.getFullYear();
  };

  return (
    <section id="archive" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-large">Скорашње умрлице</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Најновије објављене умрлице са наше платформе. Одајемо почаст свима који су нас напустили
            и пружамо подршку њиховим породицама.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {recentObituaries.map((obituary) => (
            <div 
              key={obituary.id} 
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 ${
                obituary.isFeature 
                  ? 'glass-card border-primary-gold shadow-gold lg:col-span-2 xl:col-span-1' 
                  : 'glass-card hover:shadow-elegant'
              }`}
            >
              {/* Featured Badge */}
              {obituary.isFeature && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-ui font-semibold">
                    Издвојено
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-3xl shadow-gold">
                    {obituary.photo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                      {obituary.fullName}
                    </h3>
                    <div className="text-sm text-muted-foreground font-ui space-y-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(obituary.birthDate)} - {formatDate(obituary.deathDate)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{obituary.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Age Display */}
                <div className="mb-4">
                  <div className="inline-flex items-center space-x-2 bg-muted rounded-full px-3 py-1">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-ui text-muted-foreground">
                      {calculateAge(obituary.birthDate, obituary.deathDate)} година
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className="text-sm font-body text-foreground leading-relaxed line-clamp-3">
                    {obituary.content}
                  </p>
                </div>

                {/* Mourners */}
                <div className="mb-4 p-3 bg-muted rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Heart className="w-4 h-4 text-primary-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-ui font-semibold text-muted-foreground mb-1">
                        Ожаљени:
                      </p>
                      <p className="text-sm font-body text-foreground">
                        {obituary.mourners}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground font-ui">
                    <Building2 className="w-3 h-3" />
                    <span>{obituary.publishedBy}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground font-ui">
                    <Clock className="w-3 h-3" />
                    <span>пре 2 дана</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">Погледајте све умрлице</h3>
            <p className="text-elegant mb-6">
              Претражите нашу комплетну архиву умрлица по граду, датуму или имену.
              Сви подаци су доступни за претрагу и филтрирање.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Отвори архиву
              </Button>
              <Button variant="outline" className="btn-glass">
                Напредна претрага
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};