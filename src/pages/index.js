import * as React from "react"
import "../css/homepage.sass"
import QuestionUpdate from "../components/updateInfo";
import { Link } from "gatsby"
import DefaultLayoutWrapper from "../components/DefaultLayoutWrapper";

const IndexPage = () => {
  return (
    <main>
      <DefaultLayoutWrapper>
        <h1>Hello ji this is a base intro page for the app</h1>
        <p1>This is the paragraph for the same mentioned before</p1>

        <br></br>
        <Link to="/dataInput">press Here for fun time</Link>


        <QuestionUpdate />
      </DefaultLayoutWrapper>
    </main>
  );
}

export const Head = () => <title>Home Page</title>



export default IndexPage