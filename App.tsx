import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/site/SiteLayout";
import Index from "./pages/Index";
import Paslaugos from "./pages/Paslaugos";
import ServicePage from "./pages/ServicePage";
import Galerija from "./pages/Galerija";
import Medziagos from "./pages/Medziagos";
import Kontaktai from "./pages/Kontaktai";
import NotFound from "./pages/NotFound";
import { services } from "@/lib/services";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/paslaugos" element={<Paslaugos />} />
            {services.map((s) => (
              <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage />} />
            ))}
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/medziagos" element={<Medziagos />} />
            <Route path="/kontaktai" element={<Kontaktai />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
