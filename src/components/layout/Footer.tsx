import { Building2, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary-black text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <a href="/" className="w-16 h-16 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="/logo.png" 
                  alt="e-umrlice logo" 
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Inovativna digitalna platforma za objavljivanje umrlica na teritoriji Republike Srbije.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Brze veze</h4>
            <ul className="space-y-2 text-sm font-ui">
              <li><a href="/archive" className="hover:text-primary transition-colors">Arhiva umrlica</a></li>
              <li><a href="/companies" className="hover:text-primary transition-colors">Pogrebne firme</a></li>
              <li><a href="/packages" className="hover:text-primary transition-colors">Cenovni paketi</a></li>
              <li><a href="#help" className="hover:text-primary transition-colors">Pomoć</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Servisi</h4>
            <ul className="space-y-2 text-sm font-ui">
              <li><a href="/packages" className="hover:text-primary transition-colors">Objavi umrlicu</a></li>
              <li><a href="#displays" className="hover:text-primary transition-colors">Javni displеji</a></li>
              <li><a href="#analytics" className="hover:text-primary transition-colors">Analitika</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">Podrška</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Kontakt</h4>
            <div className="space-y-3 text-sm font-ui">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@e-umrlice.rs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+381 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Beograd, Srbija</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-sm font-ui">
            <span>© 2025 e-umrlice. Sva prava zadržana. Napravljeno sa</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>za Srbiju.</span>
          </div>
          <div className="flex space-x-6 text-sm font-ui">
            <a href="#privacy" className="hover:text-primary transition-colors">Privatnost</a>
            <a href="#terms" className="hover:text-primary transition-colors">Uslovi</a>
            <a href="#gdpr" className="hover:text-primary transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};