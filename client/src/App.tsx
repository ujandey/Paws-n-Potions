import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import GetStarted from "@/pages/GetStarted";
import Feeding from "@/pages/Feeding";
import Training from "@/pages/Training";
import Health from "@/pages/Health";
import Budget from "@/pages/Budget";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import AuthPage from "@/pages/Auth"; 


function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route path="/" component={Home} />
          <Route path="/get-started" component={GetStarted} />
          <Route path="/feeding" component={Feeding} />
          <Route path="/training" component={Training} />
          <Route path="/health" component={Health} />
          <Route path="/budget" component={Budget} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;