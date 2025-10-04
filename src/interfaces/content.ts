import * as React from "react";
import type { DISCIPLINE, DISCIPLINE_SUBTOPICS, DISCIPLINE_TOPICS } from "./discipline";

export interface IContent {
  id: string;
  title: string;
  discipline: DISCIPLINE; 
  topic: DISCIPLINE_TOPICS;
  code: DISCIPLINE_SUBTOPICS;
  cover:string;
  component: () => React.JSX.Element;
}
