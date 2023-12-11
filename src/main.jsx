import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Product from "./ProductComponents/Product.jsx";
import App from "./App.jsx";
import Cart from "./CartComponents/Cart.jsx";
import ShippingOutlet from "./ShippingComponents/ShippingOutlet.jsx"
import OrderSummary from "./OrderSummaryComponents/OrderSummary.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
    children: [
      {
        path: "/cart",
        element: <ShippingOutlet />
      },
      {
        path: "/cart/summary",
        element: <OrderSummary />
      },
    ]
  }  
]);

import "./index.css";
import { theme } from "./Common/ColorTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
    <RouterProvider router={router}>

        <App />
    </RouterProvider>

      </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
