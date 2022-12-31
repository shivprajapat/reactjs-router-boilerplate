import React from "react";
import { Routes as ReactRouter, Route, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout";
import MainLayout from "../layouts/main-layout";
import Router from "../routes/Router";
import { allRoutes } from "../shared/constants/allRoutes";

const Routes = () => {
  console.log("Router :>> ", Router);
  return (
    <ReactRouter>
      {Router.map((route) => {
        return route.children.map((child) => {
          if (route.isAuth) {
            const { path, exact } = child;
            return (
              <Route
                key={path}
                path={path}
                exact={exact}
                element={<AuthLayout childComponent={<child.component />} />}
              />
            );
          } else {
            const { path, exact, isNested, nestedChild } = child;
            return (
              <Route
                path={path}
                exact={exact}
                key={path}
                element={<MainLayout childComponent={<child.component />} />}
              >
                {isNested && (
                  <>
                    {nestedChild.map((nestedChild) => {
                      const { path, exact } = nestedChild;
                      return (
                        <Route
                          key={path}
                          path={path}
                          exact={exact}
                          element={<nestedChild.nestedComponent />}
                        />
                      );
                    })}
                    <Route path="" element={<Navigate to={allRoutes.home} />} />
                  </>
                )}
              </Route>
            );
          }
        });
      })}
      <Route path="/*" element={<Navigate to={allRoutes.home} />} />
    </ReactRouter>
  );
};

export default Routes;
