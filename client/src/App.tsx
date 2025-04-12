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
import AuthPage from "@/pages/Auth"; // Assuming this component exists
import ProtectedRoute from "@/components/ProtectedRoute"; // Assuming this component exists


function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route path="/">
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          </Route>
          <Route path="/health">
            <ProtectedRoute>
              <Health />
            </ProtectedRoute>
          </Route>
          <Route path="/training">
            <ProtectedRoute>
              <Training />
            </ProtectedRoute>
          </Route>
          <Route path="/feeding">
            <ProtectedRoute>
              <Feeding />
            </ProtectedRoute>
          </Route>
          <Route path="/budget">
            <ProtectedRoute>
              <Budget />
            </ProtectedRoute>
          </Route>
          <Route path="/blog">
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          </Route>
          <Route path="/get-started">
            <ProtectedRoute>
              <GetStarted />
            </ProtectedRoute>
          </Route>
          <Route path="/contact">
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          </Route>
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