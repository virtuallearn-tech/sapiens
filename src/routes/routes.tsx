import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";
import Loading from "@components/layout/Loading";
import { ROUTES_NAME } from "./routesName";

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
const Scene = lazy(() => import("@futures/models/Scene"))
const Learn3D = lazy(() => import("@futures/Learn3D"))
const PageModule = lazy(() => import("@pages/PageModule"))
// const ResumeViewer = lazy(() => import("@pages/ResumeViewer"))
const SummaryListByDiscipline = lazy(() => import("@pages/SummaryListByDiscipline"))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Home />} />
         {/* <Route path="/" element={<SumaryList />} /> */}
        <Route path={ROUTES_NAME.LEARN_3D} element={<Learn3D />} />
        <Route path={ROUTES_NAME.SIGNUP} element={<Signup />} />
        <Route path={ROUTES_NAME.SIGNIN} element={<Signin />} />
        <Route path={ROUTES_NAME.SHARE_APP} element={<ShareApp />} />
        <Route path={ROUTES_NAME.CONTACT} element={<Contact />} />
        <Route path={ROUTES_NAME.DONATE} element={<Donate />} />
        <Route path={ROUTES_NAME.ENEM_QUESTIONS} element={<ENEMQuestions />} />

        <Route path={ROUTES_NAME.SUMMARY_LIST} element={<SumaryList />} />
        <Route path={`${ROUTES_NAME.LISTA_RESUMO}/:discipline`} element={<SummaryListByDiscipline />} />

        <Route path={`${ROUTES_NAME.MODULE}/:module`} element={<PageModule />} />
        <Route path={`${ROUTES_NAME.SUMMARY}/:discipline/:code`} element={<Sumary />} />
        <Route path={`${ROUTES_NAME.TOPIC_OPTIONS}/:discipline/:module/:topic`}element={<TopicOptions />} />
        <Route path={`${ROUTES_NAME.FLASHCARDS}/:discipline/:module/:topic`}  element={<Flashcards />} />
        <Route path={`${ROUTES_NAME.EXERCISES}/:discipline/:module/:topic`} element={<Exercises />} />
        <Route path={`${ROUTES_NAME.RESULTS}/:total/:right`} element={<Results />} />
        <Route path={`${ROUTES_NAME.SCENE}/:discipline/:topic/:code`} element={<Scene />} />
      </Routes>
    </Suspense>
  );
};
