import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Chat = lazy(() => import("../components/Chat"));
const LoginForm = lazy(() => import("../components/LoginForm"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading…</div>}>
        <Route exact path="/" component={LoginForm} />
        <Route path="/chat" component={Chat} />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
