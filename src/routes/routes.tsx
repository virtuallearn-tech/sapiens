import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";

// Lazy loading das páginas
const Signin = lazy(() => import("@pages/Signin"));
const Signup = lazy(() => import("@pages/Signup"));
const TopicOptions = lazy(() => import("@pages/TopicOptions"))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/topic-option/:code/:title" element={<TopicOptions />} />
      </Routes>
    </Suspense>
  );
};
