(this["webpackJsonpfilterable-employee-directory"]=this["webpackJsonpfilterable-employee-directory"]||[]).push([[0],{18:function(e,a,t){e.exports=t(47)},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),c=t.n(o),l=t(13),m=t(14),s=t(17),i=t(16);t(23);var d=function(e){return r.a.createElement("div",{className:"wrapper mx-0 px-0"},e.children)},p=t(2);t(24),t(25);var u=function(e){return r.a.createElement("div",{key:e.employee.key,className:"row mt-0 border-top"},r.a.createElement("div",{className:"col col-md-2 h-100 text-center empColPicture"},r.a.createElement("div",{className:"mt-3 mb-3"},r.a.createElement("img",{alt:e.employee.name,className:"img-fluid rounded-circle border border-dark",src:e.employee.picture,style:{margin:"0 auto"}}))),r.a.createElement("div",{className:"col col-md-3 text-center border-left min-h-100 empColName"},r.a.createElement("div",{className:"pt-5"},r.a.createElement("h6",{className:""},"".concat(e.employee.name)))),r.a.createElement("div",{className:"col col-md-2 text-center border-left min-h-100 empColTel"},r.a.createElement("div",{className:"pt-5"},r.a.createElement("a",{href:"tel:".concat(e.employee.phone)},r.a.createElement("h6",null,e.employee.phone)))),r.a.createElement("div",{className:"col col-md-3 text-center border-left min-h-100 empColEmail"},r.a.createElement("div",{className:"pt-5"},r.a.createElement("h6",null,r.a.createElement("a",{href:"mailto:".concat(e.employee.email)}," ",e.employee.email)))),r.a.createElement("div",{className:"col col-md-2 text-center border-left min-h-100 empColDob"},r.a.createElement("div",{className:"pt-5"},r.a.createElement("h6",null,e.employee.dob))))};t(26);var E=function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid shadow pb-3 mx-0 px-0"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Search & Sort Employee Listings",r.a.createElement("br",null))))};t(27);var b=function(e){return r.a.createElement("div",null,r.a.createElement("form",{className:"pl-0 ml-0"},r.a.createElement("div",{className:"form-row align-items-center mb-4"},r.a.createElement("div",{className:"col-9 mb-auto mt-auto pt-3"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a specific employee...",id:"search"})),r.a.createElement("div",{className:"col-1 mb-auto mt-auto"},r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement("div",{className:"col-2 mb-auto mt-auto"},r.a.createElement("button",{onClick:e.handleFormReset,className:"btn btn-primary mt-3"},"Reset")))))};var f=function(e){var a=Object(n.useState)("descend"),t=Object(p.a)(a,2),o=t[0],c=t[1],l=Object(n.useState)("descend"),m=Object(p.a)(l,2),s=m[0],i=m[1],d=Object(n.useState)([]),f=Object(p.a)(d,2),h=f[0],y=f[1],v=Object(n.useState)(""),N=Object(p.a)(v,2),D=N[0],g=N[1],O=function(e){return e.map((function(e){return r.a.createElement(u,{key:e.key,employee:e})}))};return Object(n.useEffect)((function(){y(e.presortEmployees)}),[e]),r.a.createElement("div",{className:"container-fluid mx-0 px-0"},r.a.createElement("div",{className:"container-fluid mx-0 px-0"},r.a.createElement(E,null)),r.a.createElement("div",{className:"container"},r.a.createElement(b,{handleInputChange:function(e){g(e.target.value)},handleFormSubmit:function(a){return a.preventDefault(),function(a){console.log("handleSearch > search: "+a);var t=h.filter((function(e){return e.name.includes(a)}));t.length<1?(alert("No employees match. Please reset and try again."),g(""),y(e.presortEmployees)):y(t)}(D),console.log("handleFormSubmit > sortedEmployees: "+[h]),O(h)},handleFormReset:function(a){return a.preventDefault(),g(""),y(e.presortEmployees),O(e.presortEmployees)},search:D}),r.a.createElement("div",{className:"row mt-0 border-top"},r.a.createElement("div",{className:"col col-md-2 py-3 text-center"},r.a.createElement("span",null,r.a.createElement("strong",null,"Employee Image"))),r.a.createElement("div",{className:"col col-md-3 py-3 text-center border-left"},r.a.createElement("button",{onClick:function(){if("descend"!==o||D){if("descend"===o&&D){c("ascend");var a=(0,e.namesortDesc)(h);return y(a)}if("ascend"!==o||D){if("ascend"===o&&D){c("descend");var t=(0,e.namesortAsc)(h);return y(t)}return}return c("descend"),void y(e.ascendNameEmployees)}return c("ascend"),void y(e.descendNameEmployees)},className:"btn p-0 m-0 sortBtn",sort:o},r.a.createElement("span",null,r.a.createElement("strong",null,"Employee Name\xa0\xa0"),"ascend"===o?r.a.createElement("i",{className:"fas fa-caret-up"}):r.a.createElement("i",{className:"fas fa-caret-down"})))),r.a.createElement("div",{className:"col col-md-2 py-3 text-center border-left"},r.a.createElement("span",null,r.a.createElement("strong",null,"Phone"))),r.a.createElement("div",{className:"col col-md-3 py-3 text-center border-left"},r.a.createElement("span",null,r.a.createElement("strong",null,"Email"))),r.a.createElement("div",{className:"col col-md-2 py-3 text-center border-left"},r.a.createElement("button",{onClick:function(){if("descend"===s&&!D)return i("ascend"),void y(e.descendDobEmployees);if("descend"===s&&D){i("ascend");var a=(0,e.dobsortDesc)(h);return y(a)}if("ascend"===s&&!D)return i("descend"),void y(e.ascendDobEmployees);if("ascend"===s&&D){i("descend");var t=(0,e.dobsortAsc)(h);return y(t)}},className:"btn p-0 m-0 sortBtn",sort:s},r.a.createElement("span",null,r.a.createElement("strong",null,"Date of Birth\xa0\xa0")),r.a.createElement("span",null,"ascend"===s?r.a.createElement("i",{className:"fas fa-caret-up"}):r.a.createElement("i",{className:"fas fa-caret-down"}))))),O(h)))};t(28);var h=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Employee Directory \xa9 2020\xa0\xa0|\xa0\xa0",r.a.createElement("em",null,"A ",r.a.createElement("i",{className:"fab fa-react"})," React.JS Proof-of-Concept from ChartRoom Creative")))},y=t(15),v=t.n(y),N=function(){return v.a.get("https://randomuser.me/api/?results=25&exc=login,location,registered,cell,gender&nat=us&noinfo").then((function(e){var a=e.data.results.sort((function(e,a){return e.name.last>a.name.last?1:e.name.last<a.name.last?-1:0}));return a=a.map((function(e){return{name:"".concat(e.name.last,", ").concat(e.name.first),picture:e.picture.large,phone:e.phone,email:e.email,dob:new Date(e.dob.date).toLocaleDateString(),compareDob:new Date(e.dob.date).toISOString(),age:e.dob.age,alphaOrder:a.indexOf(e),key:e.id.value}}))}))},D=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={presortEmployees:[],ascendNameEmployees:[],ascendDobEmployees:[],descendNameEmployees:[],descendDobEmployees:[]},e.presort=function(e){var a=e.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0}));return a=a.map((function(e){return{name:e.name,picture:e.picture,phone:e.phone,email:e.email,dob:e.dob,compareDob:e.compareDob,age:e.dob.age,alphaOrder:e.alphaOrder,key:e.key}}))},e.namesortAsc=function(e){var a=e.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0}));return a=a.map((function(e){return{name:e.name,picture:e.picture,phone:e.phone,email:e.email,dob:e.dob,compareDob:e.compareDob,age:e.age,alphaOrder:e.alphaOrder,key:e.key}}))},e.namesortDesc=function(e){var a=e.sort((function(e,a){return e.name<a.name?1:e.name>a.name?-1:0}));return a=a.map((function(e){return{name:e.name,picture:e.picture,phone:e.phone,email:e.email,dob:e.dob,compareDob:e.compareDob,age:e.age,alphaOrder:a.alphaOrder,key:e.key}}))},e.dobsortAsc=function(e){var a=e.sort((function(e,a){return e.compareDob>a.compareDob?1:e.compareDob<a.compareDob?-1:0}));return a=a.map((function(e){return{name:e.name,picture:e.picture,phone:e.phone,email:e.email,dob:e.dob,compareDob:e.compareDob,age:e.age,alphaOrder:a.alphaOrder,key:e.key}}))},e.dobsortDesc=function(e){var a=e.sort((function(e,a){return e.compareDob<a.compareDob?1:e.compareDob>a.compareDob?-1:0}));return a=a.map((function(e){return{name:e.name,picture:e.picture,phone:e.phone,email:e.email,dob:e.dob,compareDob:e.compareDob,age:e.age,alphaOrder:e.alphaOrder,key:e.key}}))},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;N().then((function(a){e.setState({presortEmployees:e.presort(a),ascendNameEmployees:e.namesortAsc(a),descendNameEmployees:e.namesortDesc(a),ascendDobEmployees:e.dobsortAsc(a),descendDobEmployees:e.dobsortDesc(a)})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid mx-0 px-0"},r.a.createElement(d,null,r.a.createElement(f,{dobsortDesc:this.dobsortDesc,dobsortAsc:this.dobsortAsc,namesortDesc:this.namesortDesc,namesortAsc:this.namesortAsc,presortEmployees:this.state.presortEmployees,ascendNameEmployees:this.state.ascendNameEmployees,ascendDobEmployees:this.state.ascendDobEmployees,descendNameEmployees:this.state.descendNameEmployees,descendDobEmployees:this.state.descendDobEmployees}),r.a.createElement(h,null)))}}]),t}(n.Component);t(46);c.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f5dfab2e.chunk.js.map