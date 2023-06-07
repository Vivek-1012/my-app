import { createRoot } from "react-dom/client";
import React from "react";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 
    <Router>
      <AuthProvider>
        <DataProvider>
        <WishlistProvider>   
          <CartProvider>
            
              <App />
            
          </CartProvider>
          </WishlistProvider>   
        </DataProvider>
      </AuthProvider>
    </Router>
 
);
