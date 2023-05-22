import * as React from "react"
import QuestionUpdate from "../components/updateInfo";
import { Link } from "gatsby"
import DefaultLayoutWrapper from "../components/DefaultLayoutWrapper";
import funnyGifs from "../data/funnyGif"

const IndexPage = () => {

let getRandomGif= () => {
  var index = Math.floor(Math.random() * funnyGifs.url.length);
  return funnyGifs.url[index];
}

  return (
    <main>
      <DefaultLayoutWrapper>
        <h1>Question Tracker App</h1>
        <p>Objective of this application is the ablity to perform analytics on the questions you ahev completed on leetcode or other coding platforms.</p>
        <p> We will keep track of the number of questions you have completed the time taken for you to complete the questons and other metrics which can then be used by us to create a dashboard for the same allowing you to track your progress and get a sense of how well you are performing with the given stats as your reffrence.</p>
        <p>Right now everythin is being stored and processesd locally but in future it is possiable for us to store all the data on some server and have the website deployed on github or somting IDK we will see all that in the future for now just enjoy this funny gif</p>
        <img src={getRandomGif()}></img>
        <br></br>
        <Link to="/dataInput">press Here for fun time</Link>


        <QuestionUpdate />
      </DefaultLayoutWrapper>
    </main>
  );
}

export const Head = () => <title>Home Page</title>



export default IndexPage