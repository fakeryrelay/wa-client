import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import { NotFound } from "../components/screens/not-found/NotFound";

import { useAuth } from "../hooks/useAuth"
import { routes } from "./routes.data";

export const Router = () => {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => {
          if (route.isAuth && !isAuth) {
            return false
          }

          return (
            <Route 
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          )
        })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}