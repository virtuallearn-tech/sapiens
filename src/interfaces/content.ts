import * as React from "react";
import type { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "./discipline";

export interface IContent {
  id: string;
  title: string;
  discipline: DISCIPLINE; 
  module: DISCIPLINE_MODULE;
  topic: DISCIPLINE_TOPICS;
  cover:string;
  component: () => React.JSX.Element;
}
