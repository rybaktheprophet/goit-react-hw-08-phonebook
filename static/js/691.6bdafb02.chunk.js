"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[691],{4691:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(9439),a=t(2791),s=t(9434),c=t(3634),o="Contact_wrapper__K-zLN",u="Contact_text__Wq-3f",i="Contact_button__F+kJb",l=t(184),m=function(e){var n=e.id,t=e.name,r=e.number,a=(0,s.I0)();return(0,l.jsxs)("div",{className:o,children:[(0,l.jsxs)("p",{className:u,children:[t," "]}),(0,l.jsxs)("span",{children:["- ",r]}),(0,l.jsx)("button",{type:"button",className:i,onClick:function(){return a((0,c.GK)(n))},children:"Delete"})]})},f=function(e){return e.contacts.loading},_=function(e){return e.contacts.items},d="ContactList_list__csErn",x=function(e){var n=e.filter,t=(0,s.v9)(_);return(0,l.jsx)("ul",{className:d,children:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){var n=e.id,t=e.name,r=e.number;return(0,l.jsx)("li",{children:(0,l.jsx)(m,{id:n,name:t,number:r})},n)}))})},h="ContactEditor_form__U4ufl",b="ContactEditor_input__Nbns0",j="ContactEditor_button__yGZhk",p=t(3402),v=function(){var e=(0,s.I0)(),n=(0,s.v9)(_);return(0,l.jsxs)("form",{className:h,onSubmit:function(t){t.preventDefault();var r=t.currentTarget,a=r.elements.name.value,s=r.elements.number.value;""!==a||""!==s?n.some((function(e){return e.name.toLocaleLowerCase()===a.toLocaleLowerCase()}))?p.Am.error("Name -".concat(a,"- is alredy in contacts")):(e((0,c.uK)({name:a,number:s})),r.reset()):p.Am.error("Contact cannot be empty. Enter some text!")},children:[(0,l.jsxs)("label",{children:["Name: ",(0,l.jsx)("input",{name:"name",className:b})]}),(0,l.jsxs)("label",{children:["Number: ",(0,l.jsx)("input",{name:"number",type:"tel",className:b})]}),(0,l.jsx)("button",{type:"submit",className:j,children:"Add contact"})]})},C="Filter_input__N7T3z",N=function(e){var n=e.filter,t=e.onChangeInput;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("hr",{}),"Find contacts -",(0,l.jsx)("input",{className:C,onChange:t,value:n,type:"text",name:"filter"})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]})};function g(){var e=(0,s.I0)(),n=(0,s.v9)(f);(0,a.useEffect)((function(){e((0,c.yF)())}),[e]);var t=(0,a.useState)(""),o=(0,r.Z)(t,2),u=o[0],i=o[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("title",{children:"Your Contacts"}),(0,l.jsx)(v,{}),(0,l.jsx)(N,{filter:u,onChangeInput:function(e){i(e.currentTarget.value)}}),(0,l.jsx)("div",{children:n&&"Request in progress..."}),(0,l.jsx)(x,{filter:u})]})}}}]);
//# sourceMappingURL=691.6bdafb02.chunk.js.map