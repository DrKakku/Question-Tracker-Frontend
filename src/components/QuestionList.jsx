import React from "react";

function QuestionList({ keys,data,functionObj }) {
  console.log(keys,functionObj)
  return (
      <tr key = {keys} className={data.QuestionStatus ? "done" : "notDone"}>
        {Object.keys(data).map((key,index)=>
        {
          return(
            <td key = {index} className={key}>{data[key]}</td>
          );
        })}
        {/* <td onClick={()=>functionObj.del(data.Id)}>{data.Id}</td>
        <td>{data.QuestionName}</td>
        <td>{data.QuestionURL}</td>
        <td className="QuestionStatus">{data.QuestionStatus ? "Completed" : "Not Done"}</td>
        <td>{data.StartTime}</td> */}
      </tr>
  );
}

export default QuestionList;
