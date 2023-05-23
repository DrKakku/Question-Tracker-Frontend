import React, { useState,useEffect } from "react";
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
  });

  const [reloadReq, setreloadReq] = useState(false);


  const onSubmitHandler = (data) => {
    data.preventDefault();
    console.log(fourmData);

    getData();
    setreloadReq(true);

  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name + value);
    updateFourmData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const getData = () => {
    axios
      .post(apiUrl + "/addQuestion", { data: fourmData })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  

  const onCheckChangeHandler = (event) => {
    const { name, value } = event.target;

    let questionStatus = fourmData.QuestionStatus ? false : true;

    updateFourmData((prevProps) => ({
      ...prevProps,
      [name]: questionStatus,
    }));
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
              name="QuestionStatus"
              type="checkbox"
              stateVal={fourmData.QuestionStatus}
              onChangeHandler={onCheckChangeHandler}
              label="Question Status"
            />

            <div className="form-control">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        
        <RenderQuestions reloadReq={reloadReq}/>

      </DefaultLayoutWrapper>
    </div>
  );
}
