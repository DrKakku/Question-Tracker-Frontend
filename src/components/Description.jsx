import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

function Description({ addDes, question, setAddDes, setQuestion }) {
  const [des, setDes] = useState("");
  const [desNum,setDesNum] = useState("");

  const onDescChangeHandler = (event) => {
    const { name, value } = event.target;
    setDes(value);
    let state = question;
    state.Description[desNum].Description = des;
    console.log(value, state);

    setQuestion(state);
  };

  const addDescriptionHandler = ()=>
  {
    setAddDes(true);
    let newState = question;
    newState.Description.push(
      {
        Description:""
      }
    )
    console.log(newState)
    setQuestion(newState);
    setDes("")
    setDesNum(question.Description.length-1)
    console.log(question.Description.length > 0)
  }


  const changeDescription = (key)=>
  {
    
    console.log(key);
    setDesNum(key)
    setDes(question.Description[key].Description)
  }

  const deleteDescription = (key) =>
  {
    console.log("del key"+key+"and next key"+key+1)
    let newState = question;
    newState.Description.splice(key,1)
    console.log(newState)
    setQuestion(newState);
    if(question.Description.length>0){
      changeDescription(question.Description.length-1)

    }
  }

  

  return (
    <div className="Description">
    
    <button type="button" onClick={addDescriptionHandler}>Add Description</button>

      {addDes ? (
        <div>
          <div className="input-textarea">
            <span> Add Description :- </span>
            <textarea
              name="Description"
              id="Description"
              onChange={onDescChangeHandler}
              value={des}
            ></textarea>
          </div>
          {question.Description.length > 0? 
          
          <table>
            <thead>
              <th className="id">Description Number</th>
              <th className="des">
                Description
              </th>
              <th className="edit" >Edit</th>

              <th className="del">Delete</th>

            </thead>
            <tbody>
            {question.Description.map((data, key) => {
              return (
              <tr key={key}>
                <td  className="id">{key+1}</td>
                {desNum === key?
                <td  className="des">{des}</td>:
                <td  className="des">{data.Description}</td>  
              }
                
                <td className="edit" onClick={()=>changeDescription(key)}><StaticImage src="../images/edit.svg" alt="edit" ></StaticImage></td>
                <td className="del" onClick={()=>deleteDescription(key)}> <StaticImage src="../images/DeleteForever.svg" alt="Delete" ></StaticImage> </td>
              </tr>
              );
            })}
            </tbody>
          </table>:<>sadasd</>
          }
          
            
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Description;
