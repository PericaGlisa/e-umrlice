import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, User, Mail, Lock, Phone, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [registerForm, setRegisterForm] = useState({
    companyName: '',
    ownerName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    taxNumber: '',
    registrationNumber: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login:', loginForm);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
    console.log('Register:', registerForm);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 pt-40 pb-12 flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="heading-large mb-4">Pristup za firme</h1>
            <p className="text-elegant">
              Prijavite se ili registrujte vašu pogrebnu firmu za pristup našoj platformi
            </p>
          </div>

          <Card className="glass-card p-8">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="font-ui">Prijava</TabsTrigger>
                <TabsTrigger value="register" className="font-ui">Registracija</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-heading font-semibold text-xl">Prijava za firme</h2>
                    <p className="text-sm text-muted-foreground">Unesite vaše pristupne podatke</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="font-ui">Email adresa</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="firma@example.com"
                          value={loginForm.email}
                          onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="font-ui">Lozinka</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-hero">
                    Prijavite se
                  </Button>

                  <div className="text-center">
                    <Link to="/forgot-password" className="text-sm text-primary-gold hover:underline">
                      Zaboravili ste lozinku?
                    </Link>
                  </div>
                </form>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-heading font-semibold text-xl">Registracija firme</h2>
                    <p className="text-sm text-muted-foreground">Registrujte vašu pogrebnu firmu</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name" className="font-ui">Naziv firme *</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="company-name"
                          placeholder="Pogrebno preduzeće..."
                          value={registerForm.companyName}
                          onChange={(e) => setRegisterForm({...registerForm, companyName: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="owner-name" className="font-ui">Ime vlasnika *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="owner-name"
                          placeholder="Marko Petrović"
                          value={registerForm.ownerName}
                          onChange={(e) => setRegisterForm({...registerForm, ownerName: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="font-ui">Email adresa *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="kontakt@firma.rs"
                          value={registerForm.email}
                          onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-ui">Telefon *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          placeholder="+381 11 123 4567"
                          value={registerForm.phone}
                          onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address" className="font-ui">Adresa *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="address"
                          placeholder="Ulica Broj, Grad"
                          value={registerForm.address}
                          onChange={(e) => setRegisterForm({...registerForm, address: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tax-number" className="font-ui">PIB</Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="tax-number"
                          placeholder="123456789"
                          value={registerForm.taxNumber}
                          onChange={(e) => setRegisterForm({...registerForm, taxNumber: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registration-number" className="font-ui">Matični broj</Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="registration-number"
                          placeholder="12345678"
                          value={registerForm.registrationNumber}
                          onChange={(e) => setRegisterForm({...registerForm, registrationNumber: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="font-ui">Lozinka *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="register-password"
                          type="password"
                          placeholder="••••••••"
                          value={registerForm.password}
                          onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="font-ui">Potvrdi lozinku *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                          value={registerForm.confirmPassword}
                          onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-hero">
                    Registruj firmu
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Registracijom se slažete sa našim uslovima korišćenja i politikom privatnosti
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;