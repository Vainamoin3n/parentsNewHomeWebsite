
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Amenities from "@/pages/Amenities";
import Booking from "@/pages/Booking";
import Location from "@/pages/Location";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

// Get the base URL from the import.meta.env or use the hardcoded value for GitHub Pages
const baseUrl = import.meta.env.BASE_URL || '/parentsNewHomeWebsite/';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={baseUrl}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/location" element={<Location />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
