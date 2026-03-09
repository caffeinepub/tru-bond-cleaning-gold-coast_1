import { Toaster } from "@/components/ui/sonner";
import {
  RouterProvider,
  createHashHistory,
  createRouter,
} from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SuburbPage from "./pages/SuburbPage";
import { suburbs } from "./pages/suburbData";

// Root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <Toaster position="top-right" richColors />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// Suburb routes — one per suburb for static type safety
const surferParadiseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/surfers-paradise",
  component: () => <SuburbPage suburb={suburbs[0]} />,
});

const southportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/southport",
  component: () => <SuburbPage suburb={suburbs[1]} />,
});

const broadbeachRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/broadbeach",
  component: () => <SuburbPage suburb={suburbs[2]} />,
});

const burleighHeadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/burleigh-heads",
  component: () => <SuburbPage suburb={suburbs[3]} />,
});

const robinaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/robina",
  component: () => <SuburbPage suburb={suburbs[4]} />,
});

const varsityLakesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/varsity-lakes",
  component: () => <SuburbPage suburb={suburbs[5]} />,
});

const coomeraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/coomera",
  component: () => <SuburbPage suburb={suburbs[6]} />,
});

const helensvaleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/helensvale",
  component: () => <SuburbPage suburb={suburbs[7]} />,
});

const nerangRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/nerang",
  component: () => <SuburbPage suburb={suburbs[8]} />,
});

const tweedHeadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/tweed-heads",
  component: () => <SuburbPage suburb={suburbs[9]} />,
});

const mudgeerabaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/mudgeeraba",
  component: () => <SuburbPage suburb={suburbs[10]} />,
});

const elanoraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/elanora",
  component: () => <SuburbPage suburb={suburbs[11]} />,
});

const palmBeachRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/palm-beach",
  component: () => <SuburbPage suburb={suburbs[12]} />,
});

const labradorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/labrador",
  component: () => <SuburbPage suburb={suburbs[13]} />,
});

const biggeraWatersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/biggera-waters",
  component: () => <SuburbPage suburb={suburbs[14]} />,
});

const runawayBayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/runaway-bay",
  component: () => <SuburbPage suburb={suburbs[15]} />,
});

const hopeIslandRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/hope-island",
  component: () => <SuburbPage suburb={suburbs[16]} />,
});

const oxenfordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/oxenford",
  component: () => <SuburbPage suburb={suburbs[17]} />,
});

const molendinorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/molendinar",
  component: () => <SuburbPage suburb={suburbs[18]} />,
});

const arundelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/arundel",
  component: () => <SuburbPage suburb={suburbs[19]} />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  surferParadiseRoute,
  southportRoute,
  broadbeachRoute,
  burleighHeadsRoute,
  robinaRoute,
  varsityLakesRoute,
  coomeraRoute,
  helensvaleRoute,
  nerangRoute,
  tweedHeadsRoute,
  mudgeerabaRoute,
  elanoraRoute,
  palmBeachRoute,
  labradorRoute,
  biggeraWatersRoute,
  runawayBayRoute,
  hopeIslandRoute,
  oxenfordRoute,
  molendinorRoute,
  arundelRoute,
]);

const hashHistory = createHashHistory();

const router = createRouter({
  routeTree,
  history: hashHistory,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
