"use strict";(self.webpackChunkquestion_tracker_frontend=self.webpackChunkquestion_tracker_frontend||[]).push([[328],{9234:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),l=a(9057),s=a(1883),c=a(2861),i=a(8032);var o=function(e){let{addDes:t,question:l,setAddDes:s,setQuestion:c,desLen:o,setDesLen:r}=e;const{0:m,1:d}=(0,n.useState)(""),{0:u,1:E}=(0,n.useState)(""),p=e=>{console.log(e),E(e),d(l.Description[e].Description)},g=e=>{let t=l;t.Description.splice(e,1),console.log(t),c(t),r(l.Description.length),l.Description.length>0&&p(0)};return n.createElement("div",{className:"Description"},n.createElement("button",{type:"button",onClick:()=>{s(!0);let e=l;e.Description.push({Description:""}),c(e),r(l.Description.length),E(o),d("")}},"Add Description"),t?n.createElement(n.Fragment,null,o>0?n.createElement("div",null,n.createElement("div",{className:"input-textarea"},n.createElement("span",null),n.createElement("textarea",{name:"Description",id:"Description",onChange:e=>{const{name:t,value:a}=e.target;d(a);let n=l;n.Description[u].Description=m,c(n)},value:m,placeholder:"Add Description"})),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"id"},"Description Number"),n.createElement("th",{className:"des"},"Description"),n.createElement("th",{className:"edit"},"Edit"),n.createElement("th",{className:"del"},"Delete"))),n.createElement("tbody",null,l.Description.map(((e,t)=>n.createElement("tr",{key:t},n.createElement("td",{className:"id"},t+1),u===t?n.createElement("td",{className:"des"},m):n.createElement("td",{className:"des"},e.Description),n.createElement("td",{className:"edit",onClick:()=>p(t)},n.createElement(i.S,{src:"../images/edit.svg",alt:"edit",__imageData:a(2009)})),n.createElement("td",{className:"del",onClick:()=>g(t)}," ",n.createElement(i.S,{src:"../images/DeleteForever.svg",alt:"Delete",__imageData:a(8590)})," "))))))):n.createElement(n.Fragment,null,"error")):n.createElement(n.Fragment,null,o>0?n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"id"},"Description Number"),n.createElement("th",{className:"des"},"Description"),n.createElement("th",{className:"edit"},"Edit"),n.createElement("th",{className:"del"},"Delete"))),n.createElement("tbody",null,l.Description.map(((e,t)=>n.createElement("tr",{key:t},n.createElement("td",{className:"id"},t+1),u===t?n.createElement("td",{className:"des"},m):n.createElement("td",{className:"des"},e.Description),n.createElement("td",{className:"edit",onClick:()=>p(t)},n.createElement(i.S,{src:"../images/edit.svg",alt:"edit",__imageData:a(2009)})),n.createElement("td",{className:"del",onClick:()=>g(t)}," ",n.createElement(i.S,{src:"../images/DeleteForever.svg",alt:"Delete",__imageData:a(8590)})," ")))))):n.createElement(n.Fragment,null,"No Descriptions")))};var r=function(e){let{addSol:t,question:l,setAddSol:s,setQuestion:c,SolLen:o,setSolLen:r}=e;const{0:m,1:d}=(0,n.useState)(""),{0:u,1:E}=(0,n.useState)(""),p=e=>{console.log(e),E(e),d(l.Solution[e].Solution)},g=e=>{console.log("del key "+e+" and sol Len "+o);let t=l;t.Solution.splice(e,1),console.log("newSatate"),console.log(t),c(t),r(t.Solution.length),console.log("sollen acclen"),console.log(o,l.Solution.length),console.log("question State"),console.log(l),l.Solution.length>0&&p(0)};return n.createElement("div",{className:"Solution"},n.createElement("button",{type:"button",onClick:()=>{s(!0);let e=l;e.Solution.push({Solution:""}),console.log(e),c(e),r(e.Solution.length),E(e.Solution.length-1),d(""),console.log("solLen solNum"),console.log(o,u,e.Solution.length)}},"Add Solution"),t?n.createElement(n.Fragment,null,o>0?n.createElement("div",null,n.createElement("div",{className:"input-textarea"},n.createElement("span",null),n.createElement("textarea",{name:"Solution",id:"Solution",onChange:e=>{const{name:t,value:a}=e.target;d(a);let n=l;console.log(u),n.Solution[u].Solution=m,c(n)},value:m,placeholder:"Add Solution"})),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"id"},"Solution Number"),n.createElement("th",{className:"Sol"},"Solution"),n.createElement("th",{className:"edit"},"Edit"),n.createElement("th",{className:"del"},"Delete"))),n.createElement("tbody",null,l.Solution.map(((e,t)=>n.createElement("tr",{key:t},n.createElement("td",{className:"id"},t+1),u===t?n.createElement("td",{className:"Sol"},m):n.createElement("td",{className:"Sol"},e.Solution),n.createElement("td",{className:"edit",onClick:()=>p(t)},n.createElement(i.S,{src:"../images/edit.svg",alt:"edit",__imageData:a(1214)})),n.createElement("td",{className:"del",onClick:()=>g(t)}," ",n.createElement(i.S,{src:"../images/DeleteForever.svg",alt:"Delete",__imageData:a(4647)})," "))))))):n.createElement(n.Fragment,null,"NO Solutions ")):n.createElement(n.Fragment,null,o>0?n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"id"},"Solution Number"),n.createElement("th",{className:"Sol"},"Solution"),n.createElement("th",{className:"edit"},"Edit"),n.createElement("th",{className:"del"},"Delete"))),n.createElement("tbody",null,l.Solution.map(((e,t)=>n.createElement("tr",{key:t},n.createElement("td",{className:"id"},t+1),u===t?n.createElement("td",{className:"Sol"},m):n.createElement("td",{className:"Sol"},e.Solution),n.createElement("td",{className:"edit",onClick:()=>p(t)},n.createElement(i.S,{src:"../images/edit.svg",alt:"edit",__imageData:a(1214)})),n.createElement("td",{className:"del",onClick:()=>g(t)}," ",n.createElement(i.S,{src:"../images/DeleteForever.svg",alt:"Delete",__imageData:a(4647)})," ")))))):n.createElement(n.Fragment,null,"No Solutions")))};const m="http://drkakku.pythonanywhere.com";var d=function(e){let{location:t}=e;const{0:a,1:i}=(0,n.useState)({QuestionName:"",QuestionURL:"",QuestionStatus:!1,StartDate:"",StartTime:"",EndDate:null,EndTime:null,Description:[],Solution:[]}),{0:d,1:u}=(0,n.useState)(null),{0:E,1:p}=(0,n.useState)(!1),{0:g,1:S}=(0,n.useState)(!1),{0:h,1:D}=(0,n.useState)(a.Description.length),{0:f,1:v}=(0,n.useState)(!1),{0:b,1:w}=(0,n.useState)(a.Solution.len),N=()=>{c.Z.post(m+"/queryQuestion",{modelType:"questions",queryType:"filterBy",query:[{Id:t.state.data}]}).then((e=>{let t=(e=>((e=e[0]).StartTime.length>8&&(e.StartTime=e.StartTime.slice(0,8)),w(e.Solution.length),D(e.Description.length),e))(e.data.data);i(t),p(!0),console.log(a),console.log(t)})).catch((e=>{console.log(e)}))},k=e=>{if(e.preventDefault(),(()=>{let e=!1;return null==a.QuestionName|null==a.QuestionURL?(u("name or url cannot be blank"),!1):(!1===a.QuestionStatus&&i((e=>({...e,EndDate:null,EndTime:null}))),e=!0,!0)})()){let e=(()=>{const e=new Date(a.StartDate+"T"+a.StartTime),t=new Date(a.EndDate+"T"+a.EndTime);let n=e.getTime(),l=t.getTime(),s=a.EndDate,c=a.EndTime;!1===a.QuestionStatus&&(s=null,c=null);let i=[];for(let r=0;r<a.Description.length;r++)i.push(a.Description[r].Description);console.log(a.Solutions);let o=[];for(let r=0;r<a.Solution.length;r++)o.push(a.Solution[r].Solution);return console.log(i),{Id:a.Id,QuestionName:a.QuestionName,QuestionURL:a.QuestionURL,QuestionStatus:a.QuestionStatus,StartDate:a.StartDate,StartTime:a.StartTime,EndDate:s,EndTime:c,startDateTime:n,endDateTime:l,Description:i,Solution:o}})();y(e),u(null)}},y=e=>{c.Z.post(m+"/updateQuestion",{data:e}).then((e=>{window.location.href="/checkQuestions"})).catch((e=>{console.log(e)}))};(0,n.useEffect)((()=>{N()}),[]);const Q=e=>{const{name:t,value:a}=e.target;i((e=>({...e,[t]:a})))},T=e=>{let t=!a.QuestionStatus;i((e=>({...e,QuestionStatus:t})))};return t?n.createElement(l.Z,null,n.createElement("div",null,E?n.createElement("div",null,"There is nothing to see here please go back using this link",n.createElement(s.Link,{to:"./checkQuestions.js"},"Go Back")):n.createElement("div",{className:"mainContent"},n.createElement("form",{onSubmit:k},n.createElement("div",{className:"input"},n.createElement("span",null," Question Name :- ")," ",n.createElement("input",{type:"text",name:"QuestionName",id:"QuestionName",value:a.QuestionName,onChange:Q})),n.createElement("div",{className:"input"},n.createElement("span",null," URL :- ")," ",n.createElement("input",{type:"text",name:"QuestionURL",id:"QuestionURL",value:a.QuestionURL,onChange:Q})),n.createElement("div",{className:"input"},n.createElement("span",null," Start Date :- ")," ",n.createElement("input",{type:"date",name:"StartDate",id:"StartDate",value:a.StartDate,onChange:Q})),n.createElement("div",{className:"input"},n.createElement("span",null," Start Time :- ")," ",n.createElement("input",{type:"time",name:"StartTime",id:"StartTime",value:a.StartTime,onChange:Q})),n.createElement("div",{className:"input"},n.createElement("span",null," Completion Status :- ")," ",n.createElement("input",{type:"checkbox",name:"QuestionStatus",id:"QuestionStatus",checked:a.QuestionStatus,onChange:T})),a.QuestionStatus?n.createElement(n.Fragment,null,n.createElement("div",{className:"input"},n.createElement("span",null," End Date :- ")," ",n.createElement("input",{type:"date",name:"EndDate",id:"EndDate",value:a.EndDate,onChange:Q})),n.createElement("div",{className:"input"},n.createElement("span",null," End Time :- ")," ",n.createElement("input",{type:"time",name:"EndTime",id:"EndTime",value:a.EndTime,onChange:Q}))):n.createElement(n.Fragment,null),n.createElement(o,{addDes:g,question:a,setAddDes:S,setQuestion:i,desLen:h,setDesLen:D}),n.createElement(r,{addSol:f,question:a,setAddSol:v,setQuestion:i,SolLen:b,setSolLen:w}),n.createElement("button",{type:"submit"},"Update Changes"))))):n.createElement(l.Z,null,n.createElement("div",null,"There is nothing to see here please go back using this link",n.createElement(s.Link,{to:"./checkQuestions.js"},"Go Back")))}},1214:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/629ef082e53a35f7c89b142332794830/4206d/edit.svg","srcSet":"/static/629ef082e53a35f7c89b142332794830/3dc2d/edit.svg 12w,\\n/static/629ef082e53a35f7c89b142332794830/e4605/edit.svg 24w,\\n/static/629ef082e53a35f7c89b142332794830/4206d/edit.svg 48w","sizes":"(min-width: 48px) 48px, 100vw"},"sources":[{"srcSet":"/static/629ef082e53a35f7c89b142332794830/30aa9/edit.webp 12w,\\n/static/629ef082e53a35f7c89b142332794830/4e704/edit.webp 24w,\\n/static/629ef082e53a35f7c89b142332794830/e78b1/edit.webp 48w","type":"image/webp","sizes":"(min-width: 48px) 48px, 100vw"}]},"width":48,"height":48}')},8590:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/d307f47a599cbc5073d2f8485135c5e5/4206d/DeleteForever.svg","srcSet":"/static/d307f47a599cbc5073d2f8485135c5e5/3dc2d/DeleteForever.svg 12w,\\n/static/d307f47a599cbc5073d2f8485135c5e5/e4605/DeleteForever.svg 24w,\\n/static/d307f47a599cbc5073d2f8485135c5e5/4206d/DeleteForever.svg 48w","sizes":"(min-width: 48px) 48px, 100vw"},"sources":[{"srcSet":"/static/d307f47a599cbc5073d2f8485135c5e5/30aa9/DeleteForever.webp 12w,\\n/static/d307f47a599cbc5073d2f8485135c5e5/4e704/DeleteForever.webp 24w,\\n/static/d307f47a599cbc5073d2f8485135c5e5/e78b1/DeleteForever.webp 48w","type":"image/webp","sizes":"(min-width: 48px) 48px, 100vw"}]},"width":48,"height":48}')},2009:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/629ef082e53a35f7c89b142332794830/4206d/edit.svg","srcSet":"/static/629ef082e53a35f7c89b142332794830/3dc2d/edit.svg 12w,\\n/static/629ef082e53a35f7c89b142332794830/e4605/edit.svg 24w,\\n/static/629ef082e53a35f7c89b142332794830/4206d/edit.svg 48w","sizes":"(min-width: 48px) 48px, 100vw"},"sources":[{"srcSet":"/static/629ef082e53a35f7c89b142332794830/30aa9/edit.webp 12w,\\n/static/629ef082e53a35f7c89b142332794830/4e704/edit.webp 24w,\\n/static/629ef082e53a35f7c89b142332794830/e78b1/edit.webp 48w","type":"image/webp","sizes":"(min-width: 48px) 48px, 100vw"}]},"width":48,"height":48}')},4647:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/d307f47a599cbc5073d2f8485135c5e5/4206d/DeleteForever.svg","srcSet":"/static/d307f47a599cbc5073d2f8485135c5e5/3dc2d/DeleteForever.svg 12w,\\n/static/d307f47a599cbc5073d2f8485135c5e5/e4605/DeleteForever.svg 24w,\\n/static/d307f47a599cbc5073d2f8485135c5e5/4206d/DeleteForever.svg 48w","sizes":"(min-width: 48px) 48px, 100vw"},"sources":[{"srcSet":"/static/d307f47a599cbc5073d2f8485135c5e5/30aa9/DeleteForever.webp 12w,\\n/static/d307f47a599cbc5073d2f8485135c5e5/4e704/DeleteForever.webp 24w,\\n/static/d307f47a599cbc5073d2f8485135c5e5/e78b1/DeleteForever.webp 48w","type":"image/webp","sizes":"(min-width: 48px) 48px, 100vw"}]},"width":48,"height":48}')}}]);
//# sourceMappingURL=component---src-pages-edit-question-js-141dfefe5e1f6213c376.js.map