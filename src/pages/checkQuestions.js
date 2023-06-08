import React from "react";
import DefaultLayoutWrapper from "../components/DefaultLayoutWrapper";
import RenderQuestions from "../components/RenderQuestions";

export default function checkQuestions() {
  return (
    <div>
      <DefaultLayoutWrapper>
        <div>

        Edit the questions you feel need editing.          
          <br/>
           <RenderQuestions />
        </div>
      </DefaultLayoutWrapper>
    </div>
  );
}
export const Head = () => <title>All Question</title>
