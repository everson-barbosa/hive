import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "./private/pages/dashboard";
import { SignInPage } from "./auth/pages/sign-in";
import { PrivateLayout } from "./private/layouts";
import { AuthLayout } from "./auth/layouts";
import { SignUpPage } from "./auth/pages/sign-up";
import { ManagementArticlesPage } from "./private/pages/articles/pages/management-articles";

export const router = createBrowserRouter([

  {
    path: '/', 
    element: <PrivateLayout />,
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: '/articles', children: [
        { path: '/articles', element: <ManagementArticlesPage /> }
      ] }
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