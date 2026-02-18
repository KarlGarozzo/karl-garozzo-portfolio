import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Card from "./pages/Card";
import NotFound from "./pages/NotFound";
import SecureLinkPage from "./pages/SecureLinkPage";
// 1. IMPORTE TON NOUVEAU COMPOSANT
import SecureCertificate from "./pages/SecureCertificate"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pro" element={<Card />} />
          <Route path="/business-card" element={<Card />} />
          <Route path="/securelink" element={<SecureLinkPage />} />
          <Route path="/securelink/certificate" element={<SecureCertificate />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;