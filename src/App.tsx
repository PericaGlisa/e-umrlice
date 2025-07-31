import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Archive from "./pages/Archive";
import Companies from "./pages/Companies";
import CompanyProfile from "./pages/CompanyProfile";
import Packages from "./pages/Packages";
import Login from "./pages/Login";
import ObituaryForm from "./pages/ObituaryForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/company/:id" element={<CompanyProfile />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<ObituaryForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
