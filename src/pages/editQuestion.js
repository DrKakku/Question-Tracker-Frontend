import React, { useEffect, useState } from "react";
import DefaultLayoutWrapper from "../components/DefaultLayoutWrapper";
import { Link } from "gatsby";
import axios from "axios";
import style from "../css/module.editQuestion.sass";
import Description from "../components/Description";
const apiUrl = "http://127.0.0.1:8080";

function EditQuestion({ location }) {
  const [question, setQuestion] = useState({
    QuestionName: "",
    QuestionURL: "",
    QuestionStatus: false,
    StartDate: "",
    StartTime: "",
    EndDate: null,
    EndTime: null,
    Description: [],
    Solutions: [],
  });
  const [error, setError] = useState(null);
  const [addDes,setAddDes] = useState(false);
  const [addQues,setAddQues] = useState(false);
  const ingestData = (data) => {
    console.log(data)
    if (data.StartTime.length > 8) {
      data.StartTime = data.StartTime.slice(0, 8);
    }
    
    
    return data;
    
  };

  const refreshQuestions = () => {
    axios
      .post(apiUrl + "/queryQuestion", {
        modelType: "questions",
        queryType: "filterBy",
        query: [{ Id: location.state.data }],
      })
      .then((res) => {
        let data = ingestData(res.data.data);

        setQuestion(data);

        console.log(question);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const dataPreprocess = () => {
    const startDateTimeObj = new Date(
      question.StartDate + "T" + question.StartTime
    );
    const endDateTimeObj = new Date(question.EndDate + "T" + question.EndTime);
    console.log(endDateTimeObj);
    let startDateTime = startDateTimeObj.getTime();
    let endDateTime = endDateTimeObj.getTime();
    let EndDate;
    let EndTime;
    if (question.QuestionStatus === false) {
      console.log("entered");
      let EndDate = null;
      let EndTime = null;
    }

    let response = {
      Id: question.Id,
      QuestionName: question.QuestionName,
      QuestionURL: question.QuestionURL,
      QuestionStatus: question.QuestionStatus,
      StartDate: question.StartDate,
      StartTime: question.StartTime,
      EndDate: EndDate,
      EndTime: EndTime,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    };

    console.log(response);
    return response;
  };

  const validateData = () => {
    let status = false;

    if ((question.QuestionName == null) | (question.QuestionURL == null)) {
      setError("name or url cannot be blank");
      return false;
    }

    console.log(question.QuestionStatus === false);

    if (question.QuestionStatus === false) {
      console.log("entered");
      setQuestion((prevProps) => ({
        ...prevProps,
        EndDate: null,
        EndTime: null,
      }));
    }

    status = true;
    return status;
  };

  const RenderError = () => {
    if (error) return <div className="error">Error is :- {error}</div>;
  };

  const onSubmitHandler = (data) => {
    data.preventDefault();

    if (validateData()) {
      let response = dataPreprocess();
      postQuestion(response);
      setError(null);
    }
  };

  const postQuestion = (data) => {
    axios
      .post(apiUrl + "/updateQuestion", { data: data })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };



  useEffect(() => {
    refreshQuestions();
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(question);
    console.log(name, value);
    setQuestion((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const onCheckBoxChangeHandler = (event) => {
    let questionStatus = question.QuestionStatus ? false : true;
    console.log(questionStatus);
    setQuestion((prevProps) => ({
      ...prevProps,
      QuestionStatus: questionStatus,
    }));
  };

  

  return (
    <DefaultLayoutWrapper>
      <div>
        {location.state.status ? (
          <div>
            There is nothing to see here please go back using this link
            <Link to="./checkQuestions.js">Go Back</Link>
          </div>
        ) : (
          <div className="mainContent">
            <form onSubmit={onSubmitHandler}>
              <div className="input">
                <span> Question Name :- </span>{" "}
                <input
                  type="text"
                  name="QuestionName"
                  id="QuestionName"
                  value={question["QuestionName"]}
                  onChange={onChangeHandler}
                />
              </div>
              -
              <div className="input">
                <span> URL :- </span>{" "}
                <input
                  type="text"
                  name="QuestionURL"
                  id="QuestionURL"
                  value={question["QuestionURL"]}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="input">
                <span> Start Date :- </span>{" "}
                <input
                  type="date"
                  name="StartDate"
                  id="StartDate"
                  value={question["StartDate"]}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="input">
                <span> Start Time :- </span>{" "}
                <input
                  type="time"
                  name="StartTime"
                  id="StartTime"
                  value={question["StartTime"]}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="input">
                <span> Completion Status :- </span>{" "}
                <input
                  type="checkbox"
                  name="QuestionStatus"
                  id="QuestionStatus"
                  checked={question["QuestionStatus"]}
                  onChange={onCheckBoxChangeHandler}
                />
              </div>
              {question.QuestionStatus ? (
                <>
                  <div className="input">
                    <span> End Date :- </span>{" "}
                    <input
                      type="date"
                      name="EndDate"
                      id="EndDate"
                      value={question["EndDate"]}
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="input">
                    <span> End Time :- </span>{" "}
                    <input
                      type="time"
                      name="EndTime"
                      id="EndTime"
                      value={question["EndTime"]}
                      onChange={onChangeHandler}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}


              <Description addDes={addDes} question={question} setAddDes={setAddDes} setQuestion={setQuestion} />

              
              <br />
              {question.Solutions ? (
                <>
                  {question.Solutions.map((data, key) => {
                    return <p key={key}>{data}</p>;
                  })}
                </>
              ) : (
                <>No Solutions Available</>
              )}
              <button type="submit">Update Changes</button>
            </form>
          </div>
        )}
      </div>
    </DefaultLayoutWrapper>
  );
}

export default EditQuestion;
