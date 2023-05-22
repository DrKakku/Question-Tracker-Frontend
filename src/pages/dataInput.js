import React, { useState } from 'react'
import DefaultLayoutWrapper from '../components/DefaultLayoutWrapper'
import FourmInput from "../components/FourmInput"
import "../css/fourm.sass"
import axios from 'axios'



export default function DataInput() {

  const [fourmData, updateFourmData] = useState(
    {
      QuestionName: "",
      QuestionURL: "",
      QuestionStatus: false,

    }
  )

  const [apiVal, setApival] = useState("")

  const onSubmitHandler = (data) => {
    data.preventDefault();
    console.log(fourmData)

    getData();

  }

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name + value)
    updateFourmData((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  }

  const getData = () => {
    axios.post("http://192.168.1.3:8080/saveData", { data: fourmData }).then((res) => { console.log(res.data); setApival(res.data); }).catch((e) => { console.log(e) });
  }



  const onCheckChangeHandler = (event) => {
    const { name, value } = event.target;

    let questionStatus = fourmData.QuestionStatus ? false : true;
    updateFourmData((prevProps) => ({
      ...prevProps,
      [name]: questionStatus
    }));
  }


  return (
    <div className='dataInput'>
      <DefaultLayoutWrapper>
        <h1>Question Init</h1>
        <p>Plese add information about the question you are currently working on and the status of the question ie click the checkbox if you have completed the question already</p>

        <div className="fourm">

          <form onSubmit={onSubmitHandler}>

            <FourmInput name="QuestionName" type="text" stateVal={fourmData.QuestionName} onChangeHandler={onChangeHandler} label='Question Title' />
            <FourmInput name="QuestionURL" type="text" stateVal={fourmData.QuestionURL} onChangeHandler={onChangeHandler} label='Question Url' />
            <FourmInput name="QuestionStatus" type="checkbox" stateVal={fourmData.QuestionStatus} onChangeHandler={onCheckChangeHandler} label='Question Status' />

            <div className="form-control">
              <button type="submit">Login</button>
            </div>

          </form>


        </div>
      </DefaultLayoutWrapper>
    </div>
  )
}
