import React, { useEffect, useState } from "react";
import DefaultLayoutWrapper from "../components/DefaultLayoutWrapper";
import { Link } from "gatsby";
import axios from "axios";
const apiUrl = "http://127.0.0.1:8080";

function EditQuestion({ location }) {

  const [question, setQuestion] = useState({});

  const refreshQuestions = () => {
    axios
      .post(apiUrl + "/queryQuestion", {
        modelType: "questions",
        queryType: "filterBy",
        query: [{ Id: location.state.data }],
      })
      .then((res) => {
        console.log(res);
        let data = res.data.data[0];
        console.log(data);
        setQuestion((prevProps) => ({
          ...data,
        }));
        // console.log(res.data);
        console.log(question);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => refreshQuestions(), []);

  return (
    <DefaultLayoutWrapper>
      <div>
        {location.state.status ? (
          <div>
            There is nothing to see here please go back using this link
            <Link to="./checkQuestions.js">Go Back</Link>
          </div>
        ) : (
          <div>
            Welcome back konichiwa sama you have the following details waiting
            for you;
            {Object.keys(question).map((data,key)=>{
                return(
                    <p key={key}>{data} with value {question[data]}</p>
                )
                })}
          </div>
        )}
      </div>
    </DefaultLayoutWrapper>
  );
}

export default EditQuestion;
