(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{11:function(t,e,n){t.exports={input:"Filtter_input__29Bw_"}},2:function(t,e,n){t.exports={formContainer:"ContactForm_formContainer__3O5U9",inputData:"ContactForm_inputData__3DdAa",addBtn:"ContactForm_addBtn__2-KgJ"}},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(10),r=n.n(c),i=n(3),s=n(13),o=n(4),l=n(5),u=n(7),d=n(6),m=n(11),b=n.n(m),h=n(0),f=function(t){var e=t.filter,n=t.handleChange;return Object(h.jsx)("label",{children:Object(h.jsx)("input",{className:b.a.input,type:"text",name:"filter",placeholder:"Find contact by name",value:e,onChange:n})})},j=n(2),p=n.n(j),C=n(12),O=n.n(C),x=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state.name,t.state.number)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:p.a.formContainer,children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{children:Object(h.jsx)("input",{className:p.a.inputData,type:"text",name:"name",placeholder:"Name:",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})}),Object(h.jsx)("label",{children:Object(h.jsx)("input",{className:p.a.inputData,type:"tel",name:"number",placeholder:"Number:",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})}),Object(h.jsx)("button",{type:"submit",className:p.a.addBtn,children:"Add contact"})]})})}}]),n}(a.Component);x.prototypes={addContact:O.a.func.isRequired};var v=x,_=n(8),g=n.n(_),y=function(t){var e=t.filteredContacts,n=t.onDelete;return Object(h.jsx)("ul",{className:g.a.contactsList,children:e.map((function(t){return Object(h.jsxs)("li",{className:g.a.contact,children:[t.name,": ",t.number,Object(h.jsx)("button",{className:g.a.deleteBtn,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},N=n(25),B=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name===e})))alert("".concat(e," already exists"));else{var a={id:Object(N.a)(),name:e,number:n,filter:t.state.filter};t.setState((function(t){return{contacts:[a].concat(Object(s.a)(t.contacts)),name:"",number:"",filter:""}}))}},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h2",{className:"title",children:"Phonebook:"}),Object(h.jsx)(v,{addContact:this.addContact}),Object(h.jsx)("h2",{className:"title",children:"Contacts:"}),Object(h.jsx)(f,{filter:this.state.filter,handleChange:this.handleChange}),Object(h.jsx)(y,{filteredContacts:this.filterContacts(),onDelete:this.deleteContact})]})}}]),n}(a.Component);n(21),n(22);r.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__1BcPb",contact:"ContactList_contact__2unpB",deleteBtn:"ContactList_deleteBtn__YC4af"}}},[[23,1,2]]]);
//# sourceMappingURL=main.ab412939.chunk.js.map