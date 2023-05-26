import React from "react";
import { StaticImage } from "gatsby-plugin-image";
function QuestionList({ keys, data, functionObj }) {
  const EndDate_Time = (data) => {
    if (data.data.EndDate != null && data.data.EndTime != null) {
      return (
        <>
          <td>{data.data.EndDate}</td>
          <td>{data.data.EndTime}</td>
        </>
      );
    } else {
      return (
        <>
          <td>N/A</td>
          <td>N/A</td>
        </>
      );
    }
  };

  return (
    <tr key={keys} className={data.QuestionStatus ? "done" : "notDone"}>
      <td>{data.Id}</td>
      <td>{data.QuestionName}</td>
      <td className="QuestionStatus">
        {data.QuestionStatus ? "Completed" : "Not Done"}
      </td>
      <td>{data.QuestionURL}</td>
      <td>{data.StartDate}</td>
      <td>{data.StartTime}</td>
      <EndDate_Time data={data} />
      <td onClick={() => functionObj.del(data.Id)}>
        <StaticImage
          src="../images/DeleteForever.svg"
          placeholder="blurred"
          alt="Delete Forever"
        />{" "}
      </td>
    </tr>
  );
}

export default QuestionList;
