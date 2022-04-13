import React from "react";
import { Navigation, Organization } from "./components";
import { Footer, Header } from "./components/layout";
import AppRoutes from "./routes";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Organization />
        <Navigation />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
