import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyAbout } from "./pages/about/About.lazy";
import { LazyShop } from "./pages/Shop/Shop.lazy";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element:  <Suspense fallback={'Loading...'}><LazyAbout/></Suspense>
      },
      {
        path: 'shop',
        element: <Suspense fallback={'Loading...'}><LazyShop/></Suspense>
      },
    ],
  }
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);