import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "./private/dashboard";
import { SignInPage } from "./auth/sign-in";
import { PrivateLayout } from "../layouts/private";
import { AuthLayout } from "../layouts/auth";
import { SignUpPage } from "./auth/sign-up";

export const router = createBrowserRouter([

  {
    path: '/', 
    element: <PrivateLayout />,
    children: [
      { path: '/', element: <DashboardPage /> }
    ]
  },
  {
    path: '/', 
    element: <AuthLayout />, 
    children: [
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> }
    ]
  }
])