import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { routeByPath } from "@/data/routes";
import { club } from "@/data/site";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Teams from "@/pages/Teams";
import TeamDetail from "@/pages/TeamDetail";
import Schedule from "@/pages/Schedule";
import Coaches from "@/pages/Coaches";
import Tryouts from "@/pages/Tryouts";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

/** Keeps the document title/description in sync during client-side nav. */
function useRouteMeta() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = routeByPath.get(location);
    document.title = meta?.title ?? `Page not found | ${club.name}`;

    const tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (tag && meta) tag.content = meta.description;

    // Fresh page, fresh scroll — unless the user is jumping to an anchor.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location]);
}

export default function App() {
  useRouteMeta();

  return (
    <div className="flex min-h-screen flex-col bg-navy-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-950"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/teams" component={Teams} />
          <Route path="/teams/:slug" component={TeamDetail} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/coaches" component={Coaches} />
          <Route path="/tryouts" component={Tryouts} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}
