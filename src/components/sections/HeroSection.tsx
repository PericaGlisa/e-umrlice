import { Button } from '@/components/ui/button';
import { Search, Heart, Users, Building2 } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-gold rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-teal rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="heading-display gradient-text">
                Digitalne umrlice Srbije
              </h1>
              <p className="text-elegant max-w-2xl">
                Inovativna platforma koja omogućava objavljivanje umrlica na veb-portalu i javnim reklamnim displejima 
                širom Republike Srbije. Modernizujemo način komuniciranja poslednje počasti.
              </p>
            </div>

            {/* Search Bar */}
            <div className="glass-card p-6 max-w-md">
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Pretražite umrlice..."
                  className="flex-1 bg-transparent border-none outline-none placeholder-muted-foreground font-ui"
                />
                <Button size="sm" className="btn-elegant">
                  Pretraži
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-hero">
                <Heart className="w-5 h-5 mr-2" />
                Objavi umrlicu
              </Button>
              <Button variant="outline" className="btn-glass">
                <Building2 className="w-5 h-5 mr-2" />
                Za firme
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary-gold">500+</div>
                <div className="text-sm text-muted-foreground font-ui">Umrlica mesečno</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary-gold">50+</div>
                <div className="text-sm text-muted-foreground font-ui">Gradova</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary-gold">100+</div>
                <div className="text-sm text-muted-foreground font-ui">Displeja</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 animate-float">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold">
                    <Heart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold">Sa poštovanjem</h3>
                    <p className="text-muted-foreground font-ui">Достојанствено памћење</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-primary rounded-full animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 text-center">
                      <Users className="w-6 h-6 mx-auto mb-2 text-primary-gold" />
                      <div className="text-sm font-ui">Familija</div>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <Building2 className="w-6 h-6 mx-auto mb-2 text-accent-teal" />
                      <div className="text-sm font-ui">Firma</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};