import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/renderQuestion.sass";
import QuestionList from "./QuestionList";
const apiUrl = "http://127.0.0.1:8080";

function RenderQuestions({ reloadReq }) {
  const [questionArr, setquestionArr] = useState("");

  const refreshQuestions = () => {
    axios
      .post(apiUrl + "/queryQuestion", {
        modelType: "questions",
        queryType: "all",
      })
      .then((res) => {
        console.log(res.data);
        setquestionArr(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const config = {
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
    }
  };

  const handleDelete = (id) => {
    console.log("Deleting id " + id);
    axios
      .post(apiUrl + "/delQuestion", {
        modelType: "questions",
        Id: id,
      },config)
      .then((res) => {
        console.log(res.data);
        refreshQuestions();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const QuestionComponent = () => {
    if (questionArr.status) {
      return (
        <div className="questions">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>QuestionName</th>
                <th>QuestionURL</th>
                <th>QuestionStatus</th>
                <th>StartUTC</th>
              </tr>
            </thead>
            <tbody>
              {questionArr.data.map((data, key) => {
                return (
                  <QuestionList
                    keys={key}
                    data={data}
                    functionObj={{ del: handleDelete }}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="questions-fail">
          <p>Failed to load the Data </p>
          <p>Please Try again :C </p>
        </div>
      );
    }
  };

  useEffect(() => {
    refreshQuestions();
  }, [reloadReq]);

  return (
    <div>
      <button onClick={refreshQuestions}>
        Press here to refresh questions
      </button>

      <QuestionComponent />
    </div>
  );
}

export default RenderQuestions;
