import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/components/AIChatbot";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Packages from "@/pages/Packages";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/packages" component={Packages} />
      <Route path="/why-choose-us" component={WhyChooseUs} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen font-body">
          <Navigation />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <AIChatbot />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
