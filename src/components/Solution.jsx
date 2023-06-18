import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

function Solution({ addSol, question, setAddSol, setQuestion , SolLen , setSolLen }) {

  const [Sol, setSol] = useState("");
  const [SolNum, setSolNum] = useState("");
  

  const onSolChangeHandler = (event) => {
    const { name, value } = event.target;
    setSol(value);

    let state = question;
    console.log(SolNum)
    state.Solution[SolNum].Solution = Sol;
    
    //console.log(value, state);

    setQuestion(state);
  };

  const addSolutionHandler = () => {
    setAddSol(true);
    let newState = question;
    newState.Solution.push(
      {
        Solution: ""
      }
    )
    console.log(newState)
    setQuestion(newState);
    setSolLen(newState.Solution.length)
    setSolNum(newState.Solution.length-1)
    setSol("")
    console.log("solLen solNum")
    console.log(SolLen,SolNum,newState.Solution.length)
    //console.log(question.Solution.length > 0)
  }


  const changeSolution = (key) => {

    console.log(key);
    setSolNum(key)
    setSol(question.Solution[key].Solution)
  }

  const deleteSolution = (key) => {
    console.log("del key "+key+" and sol Len "+(SolLen))
    let newState = question;
    newState.Solution.splice(key, 1)
    console.log("newSatate")
    console.log(newState)
    setQuestion(newState);
    setSolLen(newState.Solution.length)
    console.log("sollen acclen")
    console.log(SolLen,question.Solution.length)
    console.log("question State")
    console.log(question)
    
    if (question.Solution.length > 0) {
      changeSolution(0)

    }
  }




  return (
    <div className="Solution">

      <button type="button" onClick={addSolutionHandler}>Add Solution</button>

      {addSol ? (
        <>
          {SolLen > 0 ?
            <div>
              <div className="input-textarea">
                <span></span>
                <textarea
                  name="Solution"
                  id="Solution"
                  onChange={onSolChangeHandler}
                  value={Sol}
                  placeholder="Add Solution"
                ></textarea>
              </div>

              <table>
                <thead>
                  <tr>
                    <th className="id">Solution Number</th>
                    <th className="Sol">
                      Solution
                    </th>
                    <th className="edit" >Edit</th>

                    <th className="del">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {question.Solution.map((data, key) => {
                    return (
                      <tr key={key}>
                        <td className="id">{key + 1}</td>
                        {SolNum === key ?
                          <td className="Sol">{Sol}</td> :
                          <td className="Sol">{data.Solution}</td>
                        }

                        <td className="edit" onClick={() => changeSolution(key)}><StaticImage src="../images/edit.svg" alt="edit" ></StaticImage></td>
                        <td className="del" onClick={() => deleteSolution(key)}> <StaticImage src="../images/DeleteForever.svg" alt="Delete" ></StaticImage> </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            : <>NO Solutions </>
          }
        </>

      ) : (
        <>
          {SolLen >  0 ?

            <table>
              <thead>
                <tr>
                  <th className="id">Solution Number</th>
                  <th className="Sol">
                    Solution
                  </th>
                  <th className="edit" >Edit</th>

                  <th className="del">Delete</th>
                </tr>
              </thead>
              <tbody>
                {question.Solution.map((data, key) => {
                  return (
                    <tr key={key}>
                      <td className="id">{key + 1}</td>
                      {SolNum === key ?
                        <td className="Sol">{Sol}</td> :
                        <td className="Sol">{data.Solution}</td>
                      }

                      <td className="edit" onClick={() => changeSolution(key)}><StaticImage src="../images/edit.svg" alt="edit" ></StaticImage></td>
                      <td className="del" onClick={() => deleteSolution(key)}> <StaticImage src="../images/DeleteForever.svg" alt="Delete" ></StaticImage> </td>
                    </tr>
                  );
                })}
              </tbody>
            </table> : <>No Solutions</>
          }
        </>
      )}
    </div>
  );
}

export default Solution;
