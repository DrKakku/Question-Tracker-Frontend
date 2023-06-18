import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

function Description({ addDes, question, setAddDes, setQuestion,desLen, setDesLen }) {

  const [des, setDes] = useState("");
  const [desNum, setDesNum] = useState("");
  
  const onDescChangeHandler = (event) => {
    const { name, value } = event.target;
    setDes(value);

    let state = question;
    state.Description[desNum].Description = des;
    
    //console.log(value, state);

    setQuestion(state);
  };

  const addDescriptionHandler = () => {
    setAddDes(true);
    let newState = question;
    newState.Description.push(
      {
        Description: ""
      }
    )
    ////console.log(newState)
    setQuestion(newState);
    setDesLen(question.Description.length)
    setDesNum(desLen)
    setDes("")
    //console.log(question.Description.length > 0)
  }


  const changeDescription = (key) => {

    console.log(key);
    setDesNum(key)
    setDes(question.Description[key].Description)
  }

  const deleteDescription = (key) => {
    //console.log("del key"+key+"and next key"+key+1)
    let newState = question;
    newState.Description.splice(key, 1)
    console.log(newState)
    setQuestion(newState);
    setDesLen(question.Description.length)
    if (question.Description.length > 0) {
      changeDescription(0)

    }
  }




  return (
    <div className="Description">

      <button type="button" onClick={addDescriptionHandler}>Add Description</button>

      {addDes ? (
        <>
          {desLen > 0 ?
            <div>
              <div className="input-textarea">
                <span></span>
                <textarea
                  name="Description"
                  id="Description"
                  onChange={onDescChangeHandler}
                  value={des}
                  placeholder="Add Description"
                ></textarea>
              </div>

              <table>
                <thead>
                  <tr>
                    <th className="id">Description Number</th>
                    <th className="des">
                      Description
                    </th>
                    <th className="edit" >Edit</th>

                    <th className="del">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {question.Description.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className="id">{key + 1}</td>
                        {desNum === key ?
                          <td className="des">{des}</td> :
                          <td className="des">{data.Description}</td>
                        }

                        <td className="edit" onClick={() => changeDescription(key)}><StaticImage src="../images/edit.svg" alt="edit" ></StaticImage></td>
                        <td className="del" onClick={() => deleteDescription(key)}> <StaticImage src="../images/DeleteForever.svg" alt="Delete" ></StaticImage> </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            : <>error</>
          }
        </>

      ) : (
        <>
          {desLen > 0 ?

            <table>
              <thead>
                <tr>
                  <th className="id">Description Number</th>
                  <th className="des">
                    Description
                  </th>
                  <th className="edit" >Edit</th>

                  <th className="del">Delete</th>
                </tr>
              </thead>
              <tbody>
                {question.Description.map((data, key) => {
                  return (
                    <tr key={key}>
                      <td className="id">{key + 1}</td>
                      {desNum === key ?
                        <td className="des">{des}</td> :
                        <td className="des">{data.Description}</td>
                      }

                      <td className="edit" onClick={() => changeDescription(key)}><StaticImage src="../images/edit.svg" alt="edit" ></StaticImage></td>
                      <td className="del" onClick={() => deleteDescription(key)}> <StaticImage src="../images/DeleteForever.svg" alt="Delete" ></StaticImage> </td>
                    </tr>
                  );
                })}
              </tbody>
            </table> : <>No Descriptions</>
          }
        </>
      )}
    </div>
  );
}

export default Description;
