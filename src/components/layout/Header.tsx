import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Building2 } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="glass-nav">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="w-24 h-24 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="/logo.png" 
                  alt="e-umrlice logo" 
                  className="w-full h-full object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-ui">Početna</a>
              <a href="/archive" className="text-foreground hover:text-primary transition-colors font-ui">Arhiva</a>
              <a href="/companies" className="text-foreground hover:text-primary transition-colors font-ui">Firme</a>
              <a href="/packages" className="text-foreground hover:text-primary transition-colors font-ui">Paketi</a>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="font-ui" onClick={() => window.location.href = '/login'}>
                <User className="w-4 h-4 mr-2" />
                Prijava
              </Button>
              <Button className="btn-hero text-sm px-6 py-2" onClick={() => window.location.href = '/packages'}>
                Objavi umrlicu
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-glass-border">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="/" className="text-foreground hover:text-primary transition-colors font-ui">Početna</a>
                <a href="/archive" className="text-foreground hover:text-primary transition-colors font-ui">Arhiva</a>
                <a href="/companies" className="text-foreground hover:text-primary transition-colors font-ui">Firme</a>
                <a href="/packages" className="text-foreground hover:text-primary transition-colors font-ui">Paketi</a>
                <hr className="border-glass-border" />
                <Button variant="ghost" size="sm" className="justify-start font-ui" onClick={() => window.location.href = '/login'}>
                  <User className="w-4 h-4 mr-2" />
                  Prijava
                </Button>
                <Button className="btn-hero text-sm" onClick={() => window.location.href = '/packages'}>
                  Objavi umrlicu
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};