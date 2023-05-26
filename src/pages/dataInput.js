import React, { useState, useEffect } from "react";
import DefaultLayoutWrapper from "../components/DefaultLayoutWrapper";
import FourmInput from "../components/FourmInput";
import "../css/fourm.sass";
import axios from "axios";
import RenderQuestions from "../components/RenderQuestions";
const apiUrl = "http://127.0.0.1:8080";

export default function DataInput() {
  const [fourmData, updateFourmData] = useState({
    QuestionName: "",
    QuestionURL: "",
    QuestionStatus: false,
    StartDate: "",
    StartTime: "",
    EndDate: null,
    EndTime: null,
  });

  const [startDateCheck,setstartDateCheck]  = useState(false)

  useEffect(() => {
    defaultFormVals();
  }, []);

  const defaultFormVals = () => {
    let defaultEndDate = null;
    let defaultEndTime = null;

    let StartDateval = () => {
      let x = new Date().toISOString();
      return x;
    };
    let temp1 = StartDateval().split("T");
    let temp2 = temp1[1];
    temp2 = temp2.slice(0, 5);

    let defaultStartDate = temp1[0];
    let defaultStartTime = temp2;

    updateFourmData((prevProps) => ({
      ...prevProps,
      QuestionName: "",
      QuestionURL: "",
      StartDate: null,
      EndDate: defaultEndDate,
      StartTime: null,
      EndTime: defaultEndTime,
    }));
  };

  const [reloadReq, setreloadReq] = useState(0);
  const [error, setError] = useState(null);

  const dataPreprocess = () => {
    const startDateTimeObj = new Date(
      fourmData.StartDate + "T" + fourmData.StartTime
    );
    const endDateTimeObj = new Date(
      fourmData.EndDate + "T" + fourmData.EndTime
    );

    let startDateTime = startDateTimeObj.getTime();
    let endDateTime = endDateTimeObj.getTime();

    let response = {
      QuestionName: fourmData.QuestionName,
      QuestionURL: fourmData.QuestionURL,
      QuestionStatus: fourmData.QuestionStatus,
      StartDate: fourmData.StartDate,
      StartTime: fourmData.StartTime,
      EndDate: fourmData.EndDate,
      EndTime: fourmData.EndTime,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    };

    return response;
  };

  const validateData = () => {
    let status = false;

    if ((fourmData.QuestionName == null) | (fourmData.QuestionURL == null)) {
      setError("name or url cannot be blank");
      return false;
    }

    if (fourmData.questionStatus == false) {
      fourmData.EndDate = null;
      fourmData.EndTime = null;
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
      setreloadReq(reloadReq + 1);
      setError(null);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    updateFourmData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const postQuestion = (data) => {
    axios
      .post(apiUrl + "/addQuestion", { data: data })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onCheckBoxChangeHandler = (event) => {
    let questionStatus = fourmData.QuestionStatus ? false : true;

    updateFourmData((prevProps) => ({
      ...prevProps,
      QuestionStatus: questionStatus,
    }));
  };


const customDateHandler = (event) => {
  console.log("clicked ")
    let questionStatus = startDateCheck ? false : true;
    console.log(startDateCheck)
    setstartDateCheck(questionStatus);
  };


  const EndDateFourm = () => {
    if (fourmData.QuestionStatus) {
      return (
        <>
          <FourmInput
            name="EndDate"
            type="date"
            stateVal={fourmData.EndDate}
            onChangeHandler={onChangeHandler}
            label="Question EndDate"
          />
          <FourmInput
            name="EndTime"
            type="time"
            stateVal={fourmData.EndTime}
            onChangeHandler={onChangeHandler}
            label="Question EndTime"
          />
        </>
      );
    }
  };

  const StartDateFourm = () => {
    if (startDateCheck) {
      return (
        <>
          <FourmInput
            name="StartDate"
            type="date"
            stateVal={fourmData.StartDate}
            onChangeHandler={onChangeHandler}
            label="Question StartDate"
          />
          <FourmInput
            name="StartTime"
            type="time"
            stateVal={fourmData.StartTime}
            onChangeHandler={onChangeHandler}
            label="Question StartTime"
          />
        </>
      );
    }

  };

  return (
    <div className="dataInput">
      <DefaultLayoutWrapper>
        <h1>Question Init</h1>
        <p>
          Plese add information about the question you are currently working on
          and the status of the question ie click the checkbox if you have
          completed the question already
        </p>

        <div className="fourm">
          <form onSubmit={onSubmitHandler}>
            <FourmInput
              name="QuestionName"
              type="text"
              stateVal={fourmData.QuestionName}
              onChangeHandler={onChangeHandler}
              label="Question Title"
            />
            <FourmInput
              name="QuestionURL"
              type="text"
              stateVal={fourmData.QuestionURL}
              onChangeHandler={onChangeHandler}
              label="Question Url"
            />
            <FourmInput
              name="startDateCheck"
              type="checkbox"
              stateVal={startDateCheck}
              onChangeHandler={customDateHandler}
              label="Custom Start Date"
            />
            <StartDateFourm />
            <FourmInput
              name="QuestionStatus"
              type="checkbox"
              stateVal={fourmData.QuestionStatus}
              onChangeHandler={onCheckBoxChangeHandler}
              label="Question QuestionStatus"
            />
            <EndDateFourm />
            <div className="submit">
              <button type="submit">Login</button>
              <button onClick={defaultFormVals} type="reset">
                Clear inputs
              </button>
            </div>
            <RenderError />
          </form>
        </div>

        <RenderQuestions reloadReq={reloadReq} />
      </DefaultLayoutWrapper>
    </div>
  );
}
