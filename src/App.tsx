import React from "react";
import { TopComponent } from "./components/Top/Top.component";
import { ThemeComponent } from "./components/Theme/Theme.component";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { NotFoundComponent } from "./components/NotFound/NotFound.component";

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "5px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/themes/:id" element={<ThemeComponent />} />
          <Route path="/" element={<TopComponent />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
