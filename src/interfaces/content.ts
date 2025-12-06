import * as React from "react";
import  { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "./discipline";

export interface IContent {
  id: string;
  title: string;
  discipline: typeof DISCIPLINE[keyof typeof DISCIPLINE]; 
  module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE];
  topic: typeof DISCIPLINE_TOPICS[keyof typeof DISCIPLINE_TOPICS];
  cover:string;
  component: () => React.JSX.Element;
}
