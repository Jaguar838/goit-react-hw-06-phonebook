(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{11:function(e,t,n){e.exports={input:"ContactForm_input__1pgzP"}},21:function(e,t,n){e.exports=n(29)},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a,r,o,c=n(0),i=n.n(c),l=n(14),s=n.n(l),u=n(20),m=n(3),p=n(4),d=n(7),h=n(6),f=n(1),b=n(2),v=b.a.div(a||(a=Object(f.a)(["\n  width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media (max-width: 1283px) {\n    width: 940px;\n  }\n\n  @media (max-width: 992px) {\n    width: 700px;\n  }\n\n  @media (max-width: 768px) {\n    width: 520px;\n  }\n\n  @media (max-width: 576px) {\n    width: 90%;\n  }\n"]))),g=function(e){var t=e.children;return i.a.createElement(v,null,t)},C=b.a.div(r||(r=Object(f.a)(["\n    padding-top: 35px;\n    padding-bottom: 35px;\n    background-color: #fff;\n    padding-left: 24px;\n    padding-right: 24px;\n    border-radius: 7px;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    border: 1px solid rgba(128, 128, 128, 0.4);\n    margin-bottom: 30px;\n"]))),x=b.a.h3(o||(o=Object(f.a)(["\n    margin-bottom: 15px;\n"]))),E=function(e){var t=e.title,n=e.children;return i.a.createElement(C,null,t&&i.a.createElement(x,null,t),n)},A=n(18),y=n(19),_=n.n(y),F=n(11),S=n.n(F),k={name:"",phone:""},w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state=k,e.handleChangeForm=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(A.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.phone,o=e.props.onAdd;e.validateForm()&&(o({id:_()(),name:a,phone:r}),e.resetForm())},e.resetForm=function(){e.setState(k)},e.validateForm=function(){var t=e.state,n=t.name,a=t.phone,r=e.props.onCheckUnique;return n&&a?r(n):(alert("Some field is empty"),!1)},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.phone;return i.a.createElement("form",{onSubmit:this.handleFormSubmit},i.a.createElement("input",{className:S.a.input,type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:this.handleChangeForm}),i.a.createElement("input",{className:S.a.input,type:"tel",name:"phone",placeholder:"Enter phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:n,onChange:this.handleChangeForm}),i.a.createElement("button",{className:"btn",type:"submit"},"Add Contact"))}}]),n}(c.Component),O=n(8),j=n.n(O),N=function(e){var t=e.name,n=e.phone,a=e.onRemove;return i.a.createElement("li",{className:j.a.item},i.a.createElement("span",{className:j.a.span},t,":",n),i.a.createElement("button",{className:"btn",onClick:a},"Delete"))},z=function(e){var t=e.contacts,n=e.onRemove;return console.log(t),i.a.createElement("ul",{className:j.a.contacts},null===t||void 0===t?void 0:t.map((function(e){var t=e.id,a=e.name,r=e.phone;return i.a.createElement(N,{key:t,name:a,phone:r,onRemove:function(){return n(t)}})})))},D=n(9),J=n.n(D),R=function(e){var t=e.filter,n=e.onChange;return i.a.createElement("label",{className:J.a.label},i.a.createElement("span",{className:J.a.labelText},"Find contacts by name"),i.a.createElement("input",{type:"text",name:"filter",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Enter name for Search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:J.a.input}))},U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",name:"",phone:""},e.handleAddContact=function(t){return e.setState((function(e){var n=e.contacts;return{contacts:[].concat(Object(u.a)(n),[t])}}))},e.handleCheckUniqueContact=function(t){var n=!!e.state.contacts.find((function(e){return e.name===t}));return n&&alert("Contact is already exist"),!n},e.handleRemoveContact=function(t){return e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleChangeFilter=function(t){return e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("App componentDidMount");var e=JSON.parse(localStorage.getItem("contacts"));e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(e){console.log("App componentDidUpdate"),this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return i.a.createElement(g,null,i.a.createElement(E,{title:"Phonebook"},i.a.createElement(w,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUniqueContact})),i.a.createElement(E,{title:"Contact List"},i.a.createElement(R,{filter:e,onChange:this.handleChangeFilter}),i.a.createElement(z,{contacts:t,onRemove:this.handleRemoveContact})))}}]),n}(c.Component);n(28);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(U,null)),document.getElementById("root"))},8:function(e,t,n){e.exports={contacts:"ContactList_contacts__2Vvp6",span:"ContactList_span__2B5GY"}},9:function(e,t,n){e.exports={label:"Filter_label__1XFDO",labelText:"Filter_labelText__3bHmS",input:"Filter_input__3Y8TP"}}},[[21,1,2]]]);
//# sourceMappingURL=main.e7b6af87.chunk.js.map