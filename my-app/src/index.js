import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./Pages/Counter";
import ExpenseForm from "./Pages/ExpenseForm";
const App = lazy(() => import("./App"));
const HomePage = lazy(() => import("./Pages/Homepage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));

// ?createBrowserRouter will take array of objects as argument
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",

        element: (
          <Suspense>
            {" "}
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/form",
        element: <ExpenseForm />,
      },
      {
        path: "*",
        element: (
          <div className="layout-container">
            <div className="layout-container__wrapper">Page not found</div>
          </div>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={routes} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
