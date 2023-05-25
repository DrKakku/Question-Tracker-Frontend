import React from "react";

function QuestionList({ keys,data,functionObj }) {
  console.log(keys,functionObj)
  return (
      <tr key = {keys}>
        <td onClick={()=>functionObj.del(data.Id)}>{data.Id}</td>
        <td>{data.QuestionName}</td>
        <td>{data.QuestionURL}</td>
        <td>{data.QuestionStatus ? "Completed" : "Not Done"}</td>
        <td>{data.StartUTC}</td>
      </tr>
  );
}

export default QuestionList;
