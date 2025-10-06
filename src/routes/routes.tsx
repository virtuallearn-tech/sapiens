import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";

const Signin = lazy(() => import("@pages/Signin"));
const Signup = lazy(() => import("@pages/Signup"));
const TopicOptions = lazy(() => import("@pages/TopicOptions"))
const Results = lazy(() => import("@futures/Results"))
const Flashcards = lazy(() => import("@futures/Flashcard"))
const Exercises = lazy(() => import("@futures/Exercises"))
const SumaryList = lazy(() => import("@pages/SummaryList"))
const Sumary = lazy(() => import("@pages/Summary"))
const ENEMQuestions = lazy(() => import("@futures/ENEMQuestions"))
const ShareApp = lazy(() => import("@pages/ShareApp"))
const Contact = lazy(() => import("@pages/Contact"))
const Donate = lazy(() => import("@pages/Donate"))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/share-app" element={<ShareApp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/enem" element={<ENEMQuestions />} />
        <Route path="/summary-list" element={<SumaryList />} />
        <Route path="/summary/:discipline/:code" element={<Sumary />} />
        <Route path="/topic-option/:discipline/:code" element={<TopicOptions />} />
        <Route path="/flashcards/:discipline/:topic" element={<Flashcards />} />
        <Route path="/exercises/:discipline/:topic" element={<Exercises />} />
        <Route path="/results/:total/:right" element={<Results />} />
      </Routes>
    </Suspense>
  );
};
