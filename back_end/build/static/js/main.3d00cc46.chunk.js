(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{23:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),r=a.n(n),c=a(20),o=a.n(c),i=a(3),l=a(4),d=a(13),j=a(6),u=a(5),b=(a(23),a(21)),m=a(10),h=a(9),p=(a(18),a(7)),O=a.n(p),g={development:"http://localhost:".concat(5e3),production:"/api"},x="localhost"===window.location.hostname?g.development:g.production,f=(a(37),function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t={title:s.state.title,startDate:s.state.startDate,endDate:s.state.endDate,members:s.state.temporaryMembersListForDb};O.a.post("".concat(x,"/project/new"),t).then((function(e){alert("Project added successfully"),console.log("Project Data:",t),s.setState({redirect:!0})}))},s.AddUser=function(e){e.preventDefault();var t={userName:s.state.userName};""===t.userName?alert("No member Selected"):O.a.get("".concat(x,"/user/check/").concat(s.state.userName),t).then((function(e){if("The user is there"===e.data.responseMessage){console.log("The user data",e.data.userDetails);var t=s.state.temporaryMembersListForDb.slice().findIndex((function(t){return t.userId===e.data.userDetails._id}));console.log(t),t>-1?alert("the user already added"):s.setState({member:e.data.userDetails,temporaryMembersList:s.state.temporaryMembersList.concat(e.data.userDetails)}),console.log(e.data.userDetails._id),s.AddMember()}else alert(e.data);console.log(e.data)})).catch((function(e){console.log(e)}))},s.updateProject=function(){O.a.put("".concat(x,"/addMembers/").concat(s.state.title),{members:s.state.temporaryMembersList}).then((function(e){console.log(e)}))},s.AddMember=function(){var e={userId:s.state.member._id,role:"member"};console.log("memebr",e);var t=s.state.temporaryMembersListForDb.slice(),a=t.findIndex((function(t){return t.userId===e.userId}));console.log(a),-1===a?t.push(e):console.log("the user already added"),s.setState({temporaryMembersListForDb:t}),console.log(s.state.temporaryMembersListForDb)},s.removeMember=function(e){var t=s.state.temporaryMembersList.slice(),a=t.findIndex((function(t){return t.userName===e.userName}));a>-1?t.splice(a,1):console.log("not there");var n=s.state.temporaryMembersListForDb.slice(),r=n.findIndex((function(t){return t.userId===e._id}));r>-1?n.splice(r,1):console.log("the user already added"),s.setState({temporaryMembersList:t,temporaryMembersListForDb:n})},s.state={title:"",role:"",startDate:"",endDate:"",status:"",userName:"",temporaryMembersListForDb:[{userId:e.location.state.userId,role:"manager"}],temporaryMembersList:[],member:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;if(this.state.redirect)return Object(s.jsx)(h.a,{to:"/"});var t=this.state.temporaryMembersList,a=0!==t.length?t.map((function(t,a){return Object(s.jsxs)("div",{className:"memberList list-group-item",children:[Object(s.jsx)("p",{children:t.userName}),Object(s.jsx)("a",{href:"#",children:Object(s.jsx)("i",{class:"fa fa-trash",onClick:function(){return e.removeMember(t)}})})]})})):"No members";return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h3",{className:"card-header",children:"New Project"}),Object(s.jsx)("div",{className:"card-body",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{for:"ProjectName",children:"Project Name "}),Object(s.jsx)("input",{type:"text",onChange:function(t){e.setState({title:t.target.value})},value:this.state.title,className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{for:"startDate ",children:"Start Date"}),Object(s.jsx)("input",{type:"date",name:"start date",onChange:function(t){e.setState({startDate:t.target.value})},value:this.state.startDate,className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{for:"EndDate",children:"End Date"}),Object(s.jsx)("input",{type:"date",name:"end date",onChange:function(t){e.setState({endDate:t.target.value})},value:this.state.endDate,className:"form-control"})]}),Object(s.jsxs)("div",{className:"card-footer",children:[Object(s.jsxs)("form",{children:[Object(s.jsx)("h4",{children:"Add Project Team"}),Object(s.jsx)("label",{for:"addUser",children:"User Name"}),Object(s.jsxs)("div",{className:"form-inline mx-sm-3 mb-2",children:[Object(s.jsx)("input",{type:"text",onChange:function(t){e.setState({userName:t.target.value,member:""})},value:this.state.userName,className:"form-control"})," ",Object(s.jsx)("input",{type:"submit",className:"btn btn-danger",value:"Add",onClick:this.AddUser})]}),Object(s.jsx)("div",{class:"list-group",children:"No members"==a?null:a})]}),Object(s.jsxs)("div",{className:"card-footer",children:[Object(s.jsx)(m.b,{to:"/",className:"btn btn-default",children:"Cancel"}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Submit"})]})]})]})})]})})}}]),a}(n.Component)),v=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).getAllmembers=function(e){O.a.get("".concat(x,"/member/").concat(e)).then((function(e){s.setState({memberDetails:e.data})})).catch((function(e){console.log("ERROR:",e)}))},s.state={userId:e.userId,memberDetails:{},managerId:""},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getAllmembers(this.state.userId)}},{key:"render",value:function(){var e=this.props.option?Object(s.jsx)("option",{value:this.props.userId,className:"Members",children:this.state.memberDetails.userName}):Object(s.jsx)("td",{children:this.state.memberDetails.userName});return Object(s.jsxs)(s.Fragment,{children:[e," "]})}}]),a}(n.Component),D=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){},s.updateTask=function(e){e.preventDefault(),O.a.patch("".concat(x,"/tasks/").concat(s.state.taskId),s.state).then((function(e){console.log("Response Data:",e.data)})).catch((function(e){console.log("ERROR:",e)}))},s.state={taskId:e.taskId,title:e.Title,userId:e.userId,projectId:e.projectId},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:this.updateTask,children:[Object(s.jsx)("input",{type:"text",onChange:function(t){e.setState({title:t.target.value})},value:this.state.title,className:"form-control-from-group"}),"  ",Object(s.jsx)("select",{onChange:this.handleChange,children:this.props.teamMember.map((function(e){return Object(s.jsx)(v,{value:e.userId,userId:e.userId,option:!0})}))})," ","  ",Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Submit"})]})})}}]),a}(n.Component),N=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){window.confirm("Delete this Task?")&&s.deleteTaskByID(s.state.taskId)},s.deleteTaskByID=function(e){return O.a.delete("".concat(x,"/tasks/").concat(e))},s.state={taskId:e.taskId},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{})}}]),a}(n.Component),I=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){s.getAllProjectTasks()},s.toUpdate=function(e){e.map((function(e){var t=s.state.allProjectTasksDetails;e.isUpdate=!1,e.isDelete=!1,t.push(e),s.setState({allProjectTasksDetails:t})}))},s.getAllProjectTasks=function(){O.a.get("".concat(x,"/tasks/project/").concat(s.state.projectId)).then((function(e){s.toUpdate(e.data)}))},s.update=function(e){e.isUpdate=!0,s.setState({task:e})},s.delete=function(e){console.log(e),e.isDelete=!0,s.setState({task:e})},s.state={projectId:e.projectId,userId:e.userId,allProjectTasksDetails:[]},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.allProjectTasksDetails,a=0===t.length?"":t.map((function(t,a){return console.log(t),!0===t.isUpdate?Object(s.jsx)(D,{taskId:t._id,teamMember:e.props.teamMember,userId:t.userId,title:t.title,projectId:t.projectId,status:t.status}):!0===t.isDelete?Object(s.jsx)(N,{taskId:t._id}):(e.props.memberName,t.userId===e.state.userId?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:t.title})}),e.props.isUserLoggedInManager?Object(s.jsx)("td",{children:Object(s.jsx)("div",{className:"memberList",onClick:function(){return e.delete(t)},children:Object(s.jsx)("i",{className:"fa fa-trash"})})}):Object(s.jsx)("td",{}),e.props.isUserLoggedInManager?Object(s.jsx)("td",{children:Object(s.jsx)("div",{className:"memberList",onClick:function(){return e.update(t)},children:Object(s.jsx)("i",{className:"fa fa-edit"})})}):Object(s.jsx)("td",{})]}):void 0)}));return Object(s.jsx)("div",{children:a})}}]),a}(n.Component),y=a(42),k=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).AddUser=function(t){t.preventDefault();var a=Object(y.a)(e.state.members);O.a.post("".concat(x,"/userss"),e.state.userEmail).then((function(t){"Already Exist"===t.data?(console.log("Email:",e.state.userEmail),alert(e.state.userEmail+"added successfully"),a.push(e.state.userEmail),e.setState({members:a})):alert(e.state.userEmail+" Error! invalid emai")}))},e.updateProject=function(){O.a.put("".concat(x,"/addMembers/").concat(e.state.title),{members:e.state.members}).then((function(e){console.log(e),console.log(e.body)}))},e.state={userEmail:"",members:[],projectName:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.members.map((function(e){return Object(s.jsx)("td",{children:"member"})}));return Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{onSubmit:this.AddUser,children:[Object(s.jsx)("h2",{children:"Project"}),Object(s.jsx)("h4",{children:"Add Project Team"}),Object(s.jsx)("label",{for:"ProjectName",children:"Project Name:"}),Object(s.jsx)("input",{type:"text",onChange:function(t){e.setState({projectName:t.target.value})},value:this.state.projectName}),Object(s.jsx)("label",{for:"addUser",children:"User Email:"}),Object(s.jsx)("input",{type:"email",onChange:function(t){e.setState({userEmail:t.target.value})},value:this.state.userEmail}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"check user"})]}),Object(s.jsx)("table",{children:Object(s.jsx)("tr",{children:Object(s.jsx)("td",{children:t})})}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Add Team Members",onClick:this.updateProject})]})}}]),a}(n.Component),S=(n.Component,function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){window.confirm("Delete this project?")&&(s.deleteProjectByID(s.state.projectId),s.state.projectId)},s.deleteProjectByID=function(e){return O.a.delete("".concat(x,"/project/").concat(e))},s.state={projectId:e.projectId},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{})}}]),a}(n.Component)),w=a(22),C=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).componentDidMount=function(){w.a},n.newTask=function(){if(w.a,w.a.Heading,""==n.state.title&&(console.log("empty"),w.a,w.a.Heading),""===n.state.userId)return Object(s.jsx)("label",{className:"err",children:"please select the member "});O.a.post("".concat(x,"/project/tasks"),n.state).then((function(e){console.log("Task Data:",n.state)}))},n.loginHandler=function(e){n.setState({user:e,isLogged:!0})},n.handleChange=function(e){n.setState({userId:e.target.value})},n.state={title:"",projectId:e.projectId,userId:e.teamMember[0].userId,status:!1,redirect:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.teamMember),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("form",{onSubmit:this.newTask,children:Object(s.jsxs)("fieldset",{children:[Object(s.jsx)("legend",{children:"Add Task:"}),Object(s.jsx)("label",{children:"Task Title "})," ","  ",Object(s.jsx)("input",{type:"text",onChange:function(t){e.setState({title:t.target.value})},value:this.state.title,className:"form-control-from-group"}),"  ",Object(s.jsx)("select",{onChange:this.handleChange,children:this.props.teamMember.map((function(e){return Object(s.jsx)(v,{value:e.userId,userId:e.userId,option:!0})}))})," ","  ",Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Submit"})]})})})})}}]),a}(n.Component),M=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).deleteMember=function(e){console.log("delete btn clicked"),s.state.projecsDetails._id},s.updateMember=function(e){console.log("update btn clicked")},s.showAddMemberForm=function(){s.setState({showAddMemberForm:!0}),console.log(s.state.showAddMemberForm)},s.showAddTaskForm=function(){s.setState({showAddTaskForm:!0})},s.state={projecsDetails:e.location.state.projectDetils,userLoggedInId:e.location.state.userLoggedInId,showAddMemberForm:!1,showAddTaskForm:!1},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=!1,a="",n=this.state.projecsDetails.members,r=void 0!==n&&0!==n.length?n.map((function(n){return n.userId===e.state.userLoggedInId&&"manager"===n.role&&(t=!0,a=Object(s.jsx)(v,{userId:n.userId})),Object(s.jsxs)("tr",{children:[Object(s.jsx)(v,{userId:n.userId}),Object(s.jsx)(I,{userId:n.userId,projectId:e.state.projecsDetails._id,isDelete:!1,teamMember:e.state.projecsDetails.members,isUserLoggedInManager:t})]})})):"",c=new Date(this.state.projecsDetails.startDate),o=String(c.getDate()+1).padStart(2,"0"),i=String(c.getMonth()+1).padStart(2,"0"),l=c.getFullYear();c=l+"-"+i+"-"+o;var d=new Date(this.state.projecsDetails.endDate);o=String(d.getDate()+1).padStart(2,"0"),i=String(d.getMonth()+1).padStart(2,"0"),l=d.getFullYear();return d=l+"-"+i+"-"+o,console.log(this.state.userLoggedInId),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"card-header",children:[Object(s.jsx)("h3",{children:this.state.projecsDetails.title}),t?Object(s.jsxs)("div",{children:[Object(s.jsx)(m.b,{to:{pathname:"/project/update",state:{id:this.state.projecsDetails._id,title:this.state.projecsDetails.title,startDate:c,endDate:d}},children:Object(s.jsx)("i",{className:"fa fa-trash"})})," "," ",t?Object(s.jsx)(m.b,{to:{pathname:"/project/update",state:{id:this.state.projecsDetails._id,title:this.state.projecsDetails.title,startDate:c,endDate:d,userLoggedInId:this.props.location.state.userLoggedInId}},children:Object(s.jsx)("i",{className:"fa fa-edit"})}):null]}):null]}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("div",{className:"details",children:[Object(s.jsxs)("p",{children:["Start Date: ",c]}),Object(s.jsxs)("p",{children:["End Date: ",d]}),Object(s.jsxs)("p",{children:["Manager: ",a]})]}),this.state.showAddMemberForm?Object(s.jsx)(k,{projectId:this.state.projecsDetails._id,showAddMemberForm:this.showAddMemberForm}):Object(s.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.showAddMemberForm(!0)},children:"Add Member"}),this.state.showAddTaskForm?Object(s.jsx)(C,{teamMember:this.state.projecsDetails.members,projectId:this.state.projecsDetails._id}):Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.showAddTaskForm()},children:"Add Task"}),Object(s.jsxs)("table",{className:"table",children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Team Members"}),Object(s.jsx)("th",{children:"Tasks"}),Object(s.jsx)("th",{}),Object(s.jsx)("th",{})]}),r]})]})]})})}}]),a}(n.Component),L=a(41),P=(a(39),n.Component,function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).componentDidMount=function(){n.getAllProject()},n.getAllProject=function(){O.a.get("".concat(x,"/user/projects/").concat(n.state.userId)).then((function(e){n.setState({projecs_list:e.data}),console.log(e)})).catch((function(e){console.log("ERROR:",e)}))},n.getProjectDetails=function(e){return Object(s.jsx)(M,{projectId:e})},n.state={projecs_list:[],userId:e.userId},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props.userId),console.log(this.state.projecs_list);var t=this.state.projecs_list.map((function(t){return console.log(t._id),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:[" ",Object(s.jsxs)(m.b,{to:{pathname:"/project/details/".concat(t._id),state:{projectDetils:t,userLoggedInId:e.state.userId}},className:"projectList cardlist",onClick:function(){return e.getProjectDetails(t._id)},children:[" ",Object(s.jsx)("p",{className:"title",children:t.title}),Object(s.jsxs)("div",{class:"bar",children:[Object(s.jsx)("div",{class:"emptybar"}),Object(s.jsx)("div",{class:"filledbar"})]})," "]})]})})}));return Object(s.jsx)("div",{className:"ProjectsList",children:t})}}]),a}(n.Component)),E=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"welcome"})," ",Object(s.jsx)(m.b,{to:{pathname:"/newProject",state:{userId:this.props.userId}},children:Object(s.jsx)("p",{className:"pragraphNewProject",children:"New Project"})}),Object(s.jsx)("p",{className:"line",children:"My Project"}),Object(s.jsx)(P,{userId:this.props.userId})]})}}]),a}(n.Component),A=a(19),T=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).getChangeData=function(e){var t=e.target.name;s.setState(Object(A.a)({},t,e.target.value)),console.log(s.state[t])},s.saveChnages=function(e){e.preventDefault();var t={title:s.state.projectTitle,startDate:s.state.projectStartDate,endDate:s.state.projectEndDate};O.a.patch("".concat(x,"/project/update/").concat(s.state.projectid),t).then((function(e){console.log("Response Data:",e.data),s.setState({newData:e.data,redirect:!0})})).catch((function(e){console.log("ERROR:",e)}))},s.state={projectid:e.location.state.id,projectTitle:e.location.state.title,projectStartDate:e.location.state.startDate,projectEndDate:e.location.state.endDate,newData:{},userLoggedInId:e.location.state.userLoggedInId,redirect:!1},s}return Object(l.a)(a,[{key:"render",value:function(){return console.log(this.state.userLoggedInId),this.state.redirect?Object(s.jsx)(h.a,{to:{pathname:"/project/details/".concat(this.state.projectid),state:{projectDetils:this.state.newData,userLoggedInId:this.state.userLoggedInId}}}):(console.log(this.state.projectEndDate),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h3",{className:"card-header",children:"Update Project Details"}),Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("form",{onSubmit:this.saveChnages,children:Object(s.jsxs)("fieldset",{children:[Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{children:"Project title"}),Object(s.jsx)("input",{type:"text",name:"projectTitle",class:"form-control",defaultValue:this.state.projectTitle,onChange:this.getChangeData})]}),Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{children:"Start Date"}),Object(s.jsx)("input",{type:"date",name:"projectStartDate",class:"form-control",defaultValue:this.state.projectStartDate,onChange:this.getChangeData})]}),Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{children:"End Date"}),Object(s.jsx)("input",{type:"date",class:"form-control",name:"projectEndDate",defaultValue:this.state.projectEndDate,onChange:this.getChangeData})]}),Object(s.jsxs)("div",{className:"card-footer",children:[Object(s.jsx)(m.b,{to:"/",className:"btn btn-default",children:"Cancel"}),Object(s.jsx)("button",{type:"submit",className:"btn btn-danger",children:"Save"})]})]})})})]}))}}]),a}(n.Component),F=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).changeUserName=function(e){s.setState({userName:e.target.value})},s.changeEmail=function(e){s.setState({email:e.target.value})},s.changepassword=function(e){s.setState({password:e.target.value})},s.onSubmit=function(e){e.preventDefault();var t={userName:s.state.userName,email:s.state.email,password:s.state.password};O.a.post("".concat(x,"/signUp"),t).then((function(e){console.log("Response Data:",e.data),"Already Exist"===e.data&&alert("You Already have account please login"),"User validation failed"===e.data._message?alert("Error!!"):(s.props.loginHandler(e.data),alert("Welcome"),console.log("User Data",t))}))},s.state={userName:"",email:"",password:""},s.changeUserName=s.changeUserName.bind(Object(d.a)(s)),s.changeEmail=s.changeEmail.bind(Object(d.a)(s)),s.changepassword=s.changepassword.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(s.Fragment,{children:this.props.isLogged?Object(s.jsx)(h.a,{to:"/"}):Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("h3",{children:"Sign Up"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"User Name"}),Object(s.jsx)("input",{type:"text",placeholder:"User Name ",onChange:function(t){e.changeUserName(t)},value:this.state.userName,className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email address"}),Object(s.jsx)("input",{type:"email",placeholder:"Email ",onChange:function(t){e.changeEmail(t)},value:this.state.email,className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"password",placeholder:"Password ",onChange:function(t){e.changepassword(t)},value:this.state.password,className:"form-control"})]}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Sign Up"})]})})})})}}]),a}(n.Component),U=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t={email:s.state.email,password:s.state.password};O.a.post("".concat(x,"/login"),t).then((function(e){console.log("Response Data:",e.data,e.data._id),"object"===typeof e.data&&(s.props.loginHandler(e.data),console.log("Correct email and password")),"Password is not correct"===e.data&&console.log("Wrong Password"),"Email does not exist"===e.data&&console.log("Email does not exist")}))},s.getEmail=function(e){s.setState({email:e.target.value}),console.log(s.state.email)},s.getPassword=function(e){s.setState({password:e.target.value}),console.log(s.state.password)},s.state={email:"",password:""},s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.getEmail=s.getEmail.bind(Object(d.a)(s)),s.getPassword=s.getPassword.bind(Object(d.a)(s)),s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(s.Fragment,{children:this.props.isLogged?Object(s.jsx)(h.a,{to:"/"}):Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"form-div",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("h3",{children:"Sign In"}),Object(s.jsx)("label",{children:"Email address"})," ",Object(s.jsx)("br",{}),Object(s.jsx)("input",Object(A.a)({type:"email",className:"form-control",placeholder:"Email ",onChange:function(t){e.getEmail(t)},value:this.state.email},"className","form-control")),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",placeholder:"Password ",onChange:function(t){e.getPassword(t)},value:this.state.password,className:"form-control"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Log in"})]})})})})}}]),a}(n.Component),_=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[{path:"/",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(t){return Object(s.jsx)(E,{userId:e.props.userId,isAuthed:!0})}},{path:"/newProject",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(t){return Object(s.jsx)(f,Object(b.a)({username:e.props.username},t))}},{path:"/project/update",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(e){return Object(s.jsx)(T,Object(b.a)({},e))}},{path:"/project/delete",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(S,{})}},{path:"/project/list",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(P,{})}},{path:"/signup",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(F,{loginHandler:e.props.loginHandler})}},{path:"/login",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(U,{loginHandler:e.props.loginHandler})}},{path:"/members",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(v,{})}},{path:"/project/details/:id",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(e){return Object(s.jsx)(M,Object(b.a)({},e))}},{path:"/AddMember",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(k,{})}}];return Object(s.jsx)(m.a,{children:Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)("header",{children:"project managment"}),Object(s.jsx)("ul",{children:Object(s.jsx)("li",{className:"fas fa-home",children:Object(s.jsx)(m.b,{to:"/",children:"Home"})})}),Object(s.jsx)(h.d,{children:t.map((function(e,t){return Object(s.jsx)(h.b,{path:e.path,exact:e.exact,children:function(t){return Object(s.jsx)(e.sidebar,Object(b.a)({},t))}},t)}))})]}),Object(s.jsx)("div",{className:"main"}),Object(s.jsx)(h.d,{children:t.map((function(e,t){return Object(s.jsx)(h.b,{path:e.path,exact:e.exact,children:function(t){return Object(s.jsx)(e.main,Object(b.a)({},t))}},t)}))})]})})}}]),a}(n.Component),H=(a(71),function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(m.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(s.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{className:"nav-link",to:"/sign-in",children:"Login"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{className:"nav-link",to:"/sign-up",children:"Sign up"})})]})})}),Object(s.jsx)("div",{className:"auth-wrapper",children:Object(s.jsx)("div",{className:"auth-inner",children:Object(s.jsxs)(h.d,{children:[Object(s.jsx)(h.b,{exact:!0,path:"/",component:function(){return Object(s.jsx)(U,{loginHandler:e.props.loginHandler})}}),Object(s.jsx)(h.b,{path:"/sign-in",component:function(){return Object(s.jsx)(U,{loginHandler:e.props.loginHandler})}}),Object(s.jsx)(h.b,{path:"/sign-up",component:F})]})})})]})})}}]),a}(n.Component)),R=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).loginHandler=function(t){e.setState({user:t,isLogged:!0})},e.logOut=function(){e.setState({isLogged:!1,user:{},projectList:[]})},e.state={user:{},projectList:[],isLogged:!1},e.loginHandler=e.loginHandler.bind(Object(d.a)(e)),e}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:this.state.isLogged?Object(s.jsx)("div",{children:Object(s.jsx)(_,{userId:this.state.user._id,userName:this.state.user.userName,isLogged:this.state.isLogged,loginHandler:this.loginHandler})}):Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:Object(s.jsx)(H,{loginHandler:this.loginHandler})})})})}}]),a}(n.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(R,{})}),document.getElementById("root")),B()}},[[72,1,2]]]);
//# sourceMappingURL=main.3d00cc46.chunk.js.map