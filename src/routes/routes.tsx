import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";

const Signin = lazy(() => import("@pages/Signin"));
const Signup = lazy(() => import("@pages/Signup"));
const TopicOptions = lazy(() => import("@pages/TopicOptions"))
const Results = lazy(() => import("@futures/Results"))
const Flashcards = lazy(() => import("@futures/Flashcard"))
const Exercises = lazy(() => import("@futures/Exercises"))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/topic-option/:discipline/:code" element={<TopicOptions />} />
        <Route path="/flashcards/:discipline/:topic" element={<Flashcards />} />
        <Route path="/exercises/:discipline/:topic" element={<Exercises />} />
        <Route path="/results/:total/:right" element={<Results />} />
      </Routes>
    </Suspense>
  );
};
