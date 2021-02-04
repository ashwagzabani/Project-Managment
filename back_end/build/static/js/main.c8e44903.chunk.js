(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{22:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),r=a.n(n),c=a(36),o=a.n(c),i=a(2),l=a(3),d=a(11),j=a(5),b=a(4),u=(a(22),a(15),a(18)),m=a(8),h=a(7),p=a(6),O=a.n(p),x={development:"http://localhost:".concat(5e3),production:"/api"},f="localhost"===window.location.hostname?x.development:x.production,g=(a(33),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t={title:s.state.title,startDate:s.state.startDate,endDate:s.state.endDate,members:s.state.temporaryMembersListForDb,redirect:!1};O.a.post("".concat(f,"/project/new"),t).then((function(e){alert("Project added successfully"),console.log("Project Data:",t),s.setState({redirect:!0})}))},s.AddUser=function(e){e.preventDefault();var t={userName:s.state.userName};""===t.userName?alert("No member Selected"):O.a.get("".concat(f,"/user/check/").concat(s.state.userName),t).then((function(e){if("The user is there"===e.data.responseMessage){console.log("The user data",e.data.userDetails);var t=s.state.temporaryMembersListForDb.slice().findIndex((function(t){return t.userId===e.data.userDetails._id}));console.log(t),t>-1?alert("the user already added"):s.setState({member:e.data.userDetails,temporaryMembersList:s.state.temporaryMembersList.concat(e.data.userDetails)}),console.log(e.data.userDetails._id),s.AddMember()}else alert(e.data);console.log(e.data)})).catch((function(e){console.log(e)}))},s.updateProject=function(){O.a.put("".concat(f,"/addMembers/").concat(s.state.title),{members:s.state.temporaryMembersList}).then((function(e){console.log(e)}))},s.AddMember=function(){var e={userId:s.state.member._id,role:"member"};console.log("memebr",e);var t=s.state.temporaryMembersListForDb.slice(),a=t.findIndex((function(t){return t.userId===e.userId}));console.log(a),-1===a?t.push(e):console.log("the user already added"),s.setState({temporaryMembersListForDb:t}),console.log(s.state.temporaryMembersListForDb),console.log(s.state.temporaryMembersList)},s.removeMember=function(e){var t=s.state.temporaryMembersList.slice();console.log(t);var a=t.findIndex((function(t){return t.userName===e.userName}));console.log("index:",a),a>-1?t.splice(a,1):console.log("not there"),console.log(t);var n=s.state.temporaryMembersListForDb.slice(),r=n.findIndex((function(t){return t.userId===e._id}));console.log("memberIndex",r),r>-1?n.splice(r,1):console.log("the user already added"),s.setState({temporaryMembersList:t,temporaryMembersListForDb:n}),console.log(n),console.log(t)},s.state={title:"",role:"",startDate:"",endDate:"",status:"",userName:"",temporaryMembersListForDb:[{userId:"60168e71bff7b6488838bb04",role:"manager"}],temporaryMembersList:[],member:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;if(this.state.redirect)return Object(s.jsx)(h.a,{to:"/"});var t=this.state.temporaryMembersList,a=0!==t.length?t.map((function(t,a){return Object(s.jsxs)("div",{className:"memberList list-group-item",children:[Object(s.jsx)("p",{children:t.userName}),Object(s.jsx)("a",{href:"#",children:Object(s.jsx)("i",{class:"fa fa-trash",onClick:function(){return e.removeMember(t)}})})]})})):"No members";return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h3",{className:"card-header",children:"New Project"}),Object(s.jsx)("div",{className:"card-body",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{for:"ProjectName",children:"Project Name "}),Object(s.jsx)("input",{type:"text",onChange:function(t){e.setState({title:t.target.value})},value:this.state.title,className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{for:"startDate ",children:"Start Date"}),Object(s.jsx)("input",{type:"date",name:"start date",onChange:function(t){e.setState({startDate:t.target.value})},value:this.state.startDate,className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{for:"EndDate",children:"End Date"}),Object(s.jsx)("input",{type:"date",name:"end date",onChange:function(t){e.setState({endDate:t.target.value})},value:this.state.endDate,className:"form-control"})]}),Object(s.jsxs)("div",{className:"card-footer",children:[Object(s.jsxs)("form",{children:[Object(s.jsx)("h4",{children:"Add Project Team"}),Object(s.jsx)("label",{for:"addUser",children:"User Name"}),Object(s.jsxs)("div",{className:"form-inline mx-sm-3 mb-2",children:[Object(s.jsx)("input",{type:"text",onChange:function(t){e.setState({userName:t.target.value,member:""})},value:this.state.userName,className:"form-control"})," ",Object(s.jsx)("input",{type:"submit",className:"btn btn-danger",value:"Add",onClick:this.AddUser})]}),Object(s.jsx)("div",{class:"list-group",children:"No members"==a?null:a})]}),Object(s.jsxs)("div",{className:"card-footer",children:[Object(s.jsx)(m.b,{to:"/",className:"btn btn-default",children:"Cancel"}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Submit"})]})]})]})})]})})}}]),a}(n.Component)),v=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).getAllmembers=function(e){O.a.get("".concat(f,"/member/").concat(e)).then((function(e){s.setState({memberDetails:e.data})})).catch((function(e){console.log("ERROR:",e)}))},s.state={userId:e.userId,memberDetails:{},managerId:""},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getAllmembers(this.state.userId)}},{key:"render",value:function(){var e=this.props.option?Object(s.jsx)("option",{value:this.props.userId,className:"Members",children:this.state.memberDetails.userName}):Object(s.jsx)("div",{className:"Members",children:Object(s.jsx)("td",{children:this.state.memberDetails.userName})});return Object(s.jsxs)(s.Fragment,{children:[e," "]})}}]),a}(n.Component),D=(n.Component,n.Component,function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){s.getAllProjectTasks()},s.getAllProjectTasks=function(){O.a.get("".concat(f,"/tasks/project/").concat(s.state.projectId)).then((function(e){console.log(e.data),s.setState({allProjectTasksDetails:e.data})})).catch((function(e){console.log("ERROR:",e)}))},s.state={projectId:e.projectId,userId:e.userId,allProjectTasksDetails:[]},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.allProjectTasksDetails,a=0===t.length?"":t.map((function(t,a){if(t.userId===e.state.userId)return console.log(t.title),Object(s.jsx)("p",{children:t.title})}));(this.props.isupdate||this.props.isDelete)&&this.state.allProjectTasksDetails.taskId;return Object(s.jsx)("div",{children:a})}}]),a}(n.Component)),N=a(39),y=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).AddUser=function(t){t.preventDefault();var a=Object(N.a)(e.state.members);O.a.post("".concat(f,"/userss"),e.state.userEmail).then((function(t){"Already Exist"===t.data?(console.log("Email:",e.state.userEmail),alert(e.state.userEmail+"added successfully"),a.push(e.state.userEmail),e.setState({members:a})):alert(e.state.userEmail+" Error! invalid emai")}))},e.updateProject=function(){O.a.put("".concat(f,"/addMembers/").concat(e.state.title),{members:e.state.members}).then((function(e){console.log(e),console.log(e.body)}))},e.state={userEmail:"",members:[],projectName:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.members.map((function(e){return Object(s.jsx)("td",{children:"member"})}));return Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{onSubmit:this.AddUser,children:[Object(s.jsx)("h2",{children:"Project"}),Object(s.jsx)("h4",{children:"Add Project Team"}),Object(s.jsx)("label",{for:"ProjectName",children:"Project Name:"}),Object(s.jsx)("input",{type:"text",onChange:function(t){e.setState({projectName:t.target.value})},value:this.state.projectName}),Object(s.jsx)("label",{for:"addUser",children:"User Email:"}),Object(s.jsx)("input",{type:"email",onChange:function(t){e.setState({userEmail:t.target.value})},value:this.state.userEmail}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"check user"})]}),Object(s.jsx)("table",{children:Object(s.jsx)("tr",{children:Object(s.jsx)("td",{children:t})})}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Add Team Members",onClick:this.updateProject})]})}}]),a}(n.Component),I=(n.Component,function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){window.confirm("Delete this project?")&&(s.deleteProjectByID(s.state.projectId),s.state.projectId)},s.deleteProjectByID=function(e){return O.a.delete("".concat(f,"/project/").concat(e))},s.state={projectId:e.projectId},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{})}}]),a}(n.Component)),S=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).componentDidMount=function(){},n.newTask=function(){if(""===n.state.title)return Object(s.jsx)("label",{className:"err",children:"please inpute the Task "});O.a.post("".concat(f,"/project/tasks"),n.state).then((function(e){console.log("Task Data:",n.state)}))},n.handleChange=function(e){n.setState({userId:e.target.value})},n.state={title:"",projectId:e.projectId,userId:e.teamMember[0].userId,status:!1,redirect:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.teamMember),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("form",{onSubmit:this.newTask,children:Object(s.jsxs)("fieldset",{children:[Object(s.jsx)("legend",{children:"Add Task:"}),Object(s.jsx)("label",{children:"Task Title "})," ","  ",Object(s.jsx)("input",{type:"text",onChange:function(t){e.setState({title:t.target.value})},value:this.state.title,className:"form-control-from-group"}),"  ",Object(s.jsx)("select",{onChange:this.handleChange,children:this.props.teamMember.map((function(e){return Object(s.jsx)(v,{value:e.userId,userId:e.userId,option:!0})}))})," ","  ",Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Submit"})]})})})})}}]),a}(n.Component),w=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).deleteMember=function(e){console.log("delete btn clicked"),s.state.projecsDetails._id},s.updateMember=function(e){console.log("update btn clicked")},s.showAddMemberForm=function(){s.setState({showAddMemberForm:!0}),console.log(s.state.showAddMemberForm)},s.showAddTaskForm=function(){s.setState({showAddTaskForm:!0})},s.state={projecsDetails:e.location.state.projectDetils,userLoggedInId:e.location.state.userLoggedInId,showAddMemberForm:!1,showAddTaskForm:!1,isUpdate:!1},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=!1,a="",n=this.state.projecsDetails.members,r=void 0!==n&&0!==n.length?n.map((function(n){return n.userId===e.state.userLoggedInId&&"manager"===n.role&&(t=!0,a=Object(s.jsx)(v,{userId:n.userId})),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)(v,{userId:n.userId})}),Object(s.jsx)("td",{children:Object(s.jsx)(D,{userId:n.userId,projectId:e.state.projecsDetails._id})}),t?Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"#",onClick:function(){return e.deleteMember()},children:Object(s.jsx)("i",{className:"fa fa-trash"})})}):Object(s.jsx)("td",{}),t?Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"#",onClick:function(){return e.updateMember(e.state.projecsDetails._id)},children:Object(s.jsx)("i",{className:"fa fa-edit"})})}):Object(s.jsx)("td",{})]})})):"",c=new Date(this.state.projecsDetails.startDate),o=String(c.getDate()+1).padStart(2,"0"),i=String(c.getMonth()+1).padStart(2,"0"),l=c.getFullYear();c=l+"-"+i+"-"+o;var d=new Date(this.state.projecsDetails.endDate);o=String(d.getDate()+1).padStart(2,"0"),i=String(d.getMonth()+1).padStart(2,"0"),l=d.getFullYear();return d=l+"-"+i+"-"+o,Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"card-header",children:[Object(s.jsx)("h3",{children:this.state.projecsDetails.title}),t?Object(s.jsxs)("div",{children:[Object(s.jsx)(m.a,{to:{pathname:"/project/update",state:{id:this.state.projecsDetails._id,title:this.state.projecsDetails.title,startDate:c,endDate:d}},children:Object(s.jsx)("i",{className:"fa fa-trash"})})," ",t?Object(s.jsx)(m.a,{to:{pathname:"/project/update",state:{id:this.state.projecsDetails._id,title:this.state.projecsDetails.title,startDate:c,endDate:d}},children:Object(s.jsx)("i",{className:"fa fa-edit"})}):null]}):null]}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("div",{className:"details",children:[Object(s.jsxs)("p",{children:["Start Date: ",c]}),Object(s.jsxs)("p",{children:["End Date: ",d]}),Object(s.jsxs)("p",{children:["Manager: ",a]})]}),this.state.showAddMemberForm?"":Object(s.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.showAddMemberForm(!0)},children:"Add Member"}),this.state.showAddTaskForm?"":Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.showAddTaskForm()},children:"Add Task"}),this.state.showAddMemberForm?Object(s.jsx)(y,{projectId:this.state.projecsDetails._id,showAddMemberForm:this.showAddMemberForm}):""," ",this.state.showAddMemberForm?Object(s.jsx)(y,{}):"",this.state.showAddTaskForm?Object(s.jsx)(S,{teamMember:this.state.projecsDetails.members,projectId:this.state.projecsDetails._id}):"",Object(s.jsxs)("table",{className:"table",children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Team Members"}),Object(s.jsx)("th",{children:"Tasks"}),Object(s.jsx)("th",{}),Object(s.jsx)("th",{})]}),r]})]})]})})}}]),a}(n.Component),k=a(38),C=(a(35),n.Component,function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).componentDidMount=function(){n.getAllProject()},n.getAllProject=function(){O.a.get("".concat(f,"/user/projects/").concat(n.state.userId)).then((function(e){n.setState({projecs_list:e.data}),console.log(e)})).catch((function(e){console.log("ERROR:",e)}))},n.getProjectDetails=function(e){return Object(s.jsx)(w,{projectId:e})},n.state={projecs_list:[],userId:e.userId},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props.userId),console.log(this.state.projecs_list);var t=this.state.projecs_list.map((function(t){return console.log(t._id),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:[" ",Object(s.jsxs)(m.b,{to:{pathname:"/project/details/".concat(t._id),state:{projectDetils:t,userLoggedInId:e.state.userId}},className:"projectList cardlist",onClick:function(){return e.getProjectDetails(t._id)},children:[" ",Object(s.jsx)("p",{className:"title",children:t.title}),Object(s.jsxs)("div",{class:"bar",children:[Object(s.jsx)("div",{class:"emptybar"}),Object(s.jsx)("div",{class:"filledbar"})]})," "]})]})})}));return Object(s.jsx)("div",{className:"ProjectsList",children:t})}}]),a}(n.Component)),M=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"welcome"})," ",Object(s.jsx)(m.b,{to:{pathname:"/newProject",state:{userId:this.props.userId}},children:Object(s.jsx)("p",{className:"pragraphNewProject",children:"New Project"})}),Object(s.jsx)("p",{className:"line",children:"My Project"}),Object(s.jsx)(C,{userId:this.props.userId})]})}}]),a}(n.Component),P=a(17),E=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).getChangeData=function(e){var t=e.target.name;s.setState(Object(P.a)({},t,e.target.value)),console.log(s.state[t])},s.saveChnages=function(e){e.preventDefault();var t={title:s.state.projectTitle,startDate:s.state.projectStartDate,endDate:s.state.projectEndDate};O.a.patch("".concat(f,"/project/").concat(s.state.projectid),t).then((function(e){console.log("Response Data:",e.data),s.setState({newData:e.data,redirect:!0})})).catch((function(e){console.log("ERROR:",e)}))},s.state={projectid:e.location.state.id,projectTitle:e.location.state.title,projectStartDate:e.location.state.startDate,projectEndDate:e.location.state.endDate,newData:{},redirect:!1},s}return Object(l.a)(a,[{key:"render",value:function(){return this.state.redirect?Object(s.jsx)(h.a,{to:{pathname:"/project/details/".concat(this.state.projectid),state:{projectDetils:this.state.newData}}}):(console.log(this.state.projectEndDate),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h3",{className:"card-header",children:"Update Project Details"}),Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("form",{onSubmit:this.saveChnages,children:Object(s.jsxs)("fieldset",{children:[Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{children:"Project title"}),Object(s.jsx)("input",{type:"text",name:"projectTitle",class:"form-control",defaultValue:this.state.projectTitle,onChange:this.getChangeData})]}),Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{children:"Start Date"}),Object(s.jsx)("input",{type:"date",name:"projectStartDate",class:"form-control",defaultValue:this.state.projectStartDate,onChange:this.getChangeData})]}),Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{children:"End Date"}),Object(s.jsx)("input",{type:"date",class:"form-control",name:"projectEndDate",defaultValue:this.state.projectEndDate,onChange:this.getChangeData})]}),Object(s.jsxs)("div",{className:"card-footer",children:[Object(s.jsx)(m.b,{to:"/",className:"btn btn-default",children:"Cancel"}),Object(s.jsx)("button",{type:"submit",className:"btn btn-danger",children:"Save"})]})]})})})]}))}}]),a}(n.Component),A=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).changeUserName=function(e){s.setState({userName:e.target.value})},s.changeEmail=function(e){s.setState({email:e.target.value})},s.changepassword=function(e){s.setState({password:e.target.value})},s.onSubmit=function(e){e.preventDefault();var t={userName:s.state.userName,email:s.state.email,password:s.state.password};O.a.post("".concat(f,"/signUp"),t).then((function(e){console.log("Response Data:",e.data),"Already Exist"===e.data&&alert("You Already have account please login"),"User validation failed"===e.data._message?alert("Error!!"):(s.props.loginHandler(e.data),alert("Welcome"),console.log("User Data",t))}))},s.state={userName:"",email:"",password:""},s.changeUserName=s.changeUserName.bind(Object(d.a)(s)),s.changeEmail=s.changeEmail.bind(Object(d.a)(s)),s.changepassword=s.changepassword.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(s.Fragment,{children:this.props.isLogged?Object(s.jsx)(h.a,{to:"/"}):Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("h3",{children:"Sign Up"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"User Name"}),Object(s.jsx)("input",{type:"text",placeholder:"User Name ",onChange:function(t){e.changeUserName(t)},value:this.state.userName,className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email address"}),Object(s.jsx)("input",{type:"email",placeholder:"Email ",onChange:function(t){e.changeEmail(t)},value:this.state.email,className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"password",placeholder:"Password ",onChange:function(t){e.changepassword(t)},value:this.state.password,className:"form-control"})]}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Sign Up"})]})})})})}}]),a}(n.Component),L=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t={email:s.state.email,password:s.state.password};O.a.post("".concat(f,"/login"),t).then((function(e){console.log("Response Data:",e.data,e.data._id),"object"===typeof e.data&&(s.props.loginHandler(e.data),console.log("Correct email and password")),"Password is not correct"===e.data&&console.log("Wrong Password"),"Email does not exist"===e.data&&console.log("Email does not exist")}))},s.getEmail=function(e){s.setState({email:e.target.value}),console.log(s.state.email)},s.getPassword=function(e){s.setState({password:e.target.value}),console.log(s.state.password)},s.state={email:"",password:""},s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.getEmail=s.getEmail.bind(Object(d.a)(s)),s.getPassword=s.getPassword.bind(Object(d.a)(s)),s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(s.Fragment,{children:this.props.isLogged?Object(s.jsx)(h.a,{to:"/"}):Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"form-div",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("h3",{children:"Sign In"}),Object(s.jsx)("label",{children:"Email address"})," ",Object(s.jsx)("br",{}),Object(s.jsx)("input",Object(P.a)({type:"email",className:"form-control",placeholder:"Email ",onChange:function(t){e.getEmail(t)},value:this.state.email},"className","form-control")),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",placeholder:"Password ",onChange:function(t){e.getPassword(t)},value:this.state.password,className:"form-control"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"submit",className:"btn btn-danger btn-black",value:"Log in"})]})})})})}}]),a}(n.Component),F=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[{path:"/",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(t){return Object(s.jsx)(M,{userId:e.props.userId,isAuthed:!0})}},{path:"/newProject",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(t){return Object(s.jsx)(g,Object(u.a)({username:e.props.username},t))}},{path:"/project/update",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(e){return Object(s.jsx)(E,Object(u.a)({},e))}},{path:"/project/delete",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(I,{})}},{path:"/project/list",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(C,{})}},{path:"/signup",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(A,{loginHandler:e.props.loginHandler})}},{path:"/login",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(L,{loginHandler:e.props.loginHandler})}},{path:"/members",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(v,{})}},{path:"/project/details/:id",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(e){return Object(s.jsx)(w,Object(u.a)({},e))}},{path:"/AddMember",exact:!0,sidebar:function(){return Object(s.jsx)("div",{})},main:function(){return Object(s.jsx)(y,{})}}];return Object(s.jsx)(m.a,{children:Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)("header",{children:"project managment"}),Object(s.jsx)("ul",{children:Object(s.jsx)("li",{className:"fas fa-home",children:Object(s.jsx)(m.b,{to:"/",children:"Home"})})}),Object(s.jsx)(h.d,{children:t.map((function(e,t){return Object(s.jsx)(h.b,{path:e.path,exact:e.exact,children:function(t){return Object(s.jsx)(e.sidebar,Object(u.a)({},t))}},t)}))})]}),Object(s.jsx)("div",{className:"main"}),Object(s.jsx)(h.d,{children:t.map((function(e,t){return Object(s.jsx)(h.b,{path:e.path,exact:e.exact,children:function(t){return Object(s.jsx)(e.main,Object(u.a)({},t))}},t)}))})]})})}}]),a}(n.Component),T=(a(68),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(m.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(s.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{className:"nav-link",to:"/sign-in",children:"Login"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{className:"nav-link",to:"/sign-up",children:"Sign up"})})]})})}),Object(s.jsx)("div",{className:"auth-wrapper",children:Object(s.jsx)("div",{className:"auth-inner",children:Object(s.jsxs)(h.d,{children:[Object(s.jsx)(h.b,{exact:!0,path:"/",component:function(){return Object(s.jsx)(L,{loginHandler:e.props.loginHandler})}}),Object(s.jsx)(h.b,{path:"/sign-in",component:function(){return Object(s.jsx)(L,{loginHandler:e.props.loginHandler})}}),Object(s.jsx)(h.b,{path:"/sign-up",component:A})]})})})]})})}}]),a}(n.Component)),_=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).loginHandler=function(t){e.setState({user:t,isLogged:!0})},e.logOut=function(){e.setState({isLogged:!1,user:{},projectList:[]})},e.state={user:{},projectList:[],isLogged:!1},e.loginHandler=e.loginHandler.bind(Object(d.a)(e)),e}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:this.state.isLogged?Object(s.jsx)("div",{children:Object(s.jsx)(F,{userId:this.state.user._id,userName:this.state.user.userName,isLogged:this.state.isLogged,loginHandler:this.loginHandler})}):Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:Object(s.jsx)(T,{loginHandler:this.loginHandler})})})})}}]),a}(n.Component),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root")),U()}},[[69,1,2]]]);
//# sourceMappingURL=main.c8e44903.chunk.js.map