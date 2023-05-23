import React, { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = "http://127.0.0.1:8080";


function RenderQuestions({reloadReq}) {
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

  const QuestionComponent = () => {
    if (questionArr.status) {
      return (
        <div className="questions">
          <table>
            <thead>
              <th>Id</th>
              <th>QuestionName</th>
              <th>QuestionURL</th>
              <th>QuestionStatus</th>
              <th>StartUTC</th>
            </thead>
          {questionArr.data.map((data, key) => {
            return (
              <tr key={key}>
                <td>{data.Id}</td>
                <td>{data.QuestionName}</td>
                <td>{data.QuestionURL}</td>
                <td>{data.QuestionStatus?"Completed":"Not Done"}</td>
                <td>{data.StartUTC}</td>
              </tr>
            );
          })}
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
