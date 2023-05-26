import React from "react";
import DefaultLayoutWrapper from "../components/DefaultLayoutWrapper";
import RenderQuestions from "../components/RenderQuestions";

export default function checkQuestions() {
  return (
    <div>
      <DefaultLayoutWrapper>
        <div>
          THis is the page where you will encounter the answers and can modify
          them when needed.
          
          <br/>
           <RenderQuestions />
        </div>
      </DefaultLayoutWrapper>
    </div>
  );
}
