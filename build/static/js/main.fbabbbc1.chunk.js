(this["webpackJsonpreact-auth-boilerplate"]=this["webpackJsonpreact-auth-boilerplate"]||[]).push([[0],{143:function(e,t,s){},144:function(e,t,s){},210:function(e,t,s){},211:function(e,t,s){},229:function(e,t,s){},230:function(e,t,s){},231:function(e,t,s){},232:function(e,t,s){},234:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(27),r=s.n(a),i=(s(143),s(6)),o=s(11),l=s(244),j=s(48),d=s(49),u=s(92),b=s(90),h=s(107),O=(s(144),s(0)),x=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,s=e.heading,n=e.message,c=e.deleteAlert,a=e.id;return this.state.show||setTimeout((function(){c(a)}),300),Object(O.jsx)(h.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(h.a.Heading,{children:s}),Object(O.jsx)("p",{className:"alert-body",children:n})]})})}}]),s}(c.a.Component),g=s(13),f=s(42),p=s(65),m=s(12),v={color:"white",textDecoration:"none"},w=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a.Link,{children:Object(O.jsx)(m.b,{to:"change-password",style:v,children:"Change Password"})}),Object(O.jsx)(f.a.Link,{children:Object(O.jsx)(m.b,{to:"sign-out",style:v,children:"Sign Out"})}),Object(O.jsx)(f.a.Link,{children:Object(O.jsx)(m.b,{to:"profile",style:v,children:"Profile"})})]}),y=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a.Link,{children:Object(O.jsx)(m.b,{to:"sign-up",style:v,children:"Sign Up"})}),Object(O.jsx)(f.a.Link,{children:Object(O.jsx)(m.b,{to:"sign-in",style:v,children:"Sign In"})})]}),k=Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(f.a.Link,{children:Object(O.jsx)(m.b,{to:"/",style:v,children:"Home"})})}),S=function(e){var t,s=e.user;return Object(O.jsxs)(p.a,{bg:"warning",variant:"dark",expand:"md",children:[Object(O.jsx)(p.a.Brand,{children:Object(O.jsx)(m.b,(t={to:"/",style:v},Object(g.a)(t,"style",{marginLeft:"10px",textDecoration:"none"}),Object(g.a)(t,"children","Pawsibly"),t))}),Object(O.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(f.a,{className:"ml-auto",children:[k,s?w:y]})})]})};function C(e){var t=e.user,s=e.children;return null!==t?s:Object(O.jsx)(o.a,{to:"/sign-in",replace:!0})}var N=s(17);var T=function(e,t){return Object(O.jsxs)("div",{className:"rating",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:e.color},className:e.value>=1?"fas fa-star":e.value>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:e.color},className:e.value>=2?"fas fa-star":e.value>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:e.color},className:e.value>=3?"fas fa-star":e.value>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:e.color},className:e.value>=4?"fas fa-star":e.value>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:e.color},className:e.value>=5?"fas fa-star":e.value>=4.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:e.text&&e.text})]})};function P(e){var t;return console.log("props in sitter list",e),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(N.Row,{children:Object(O.jsx)(N.Col,{m:6,s:12,children:Object(O.jsx)("div",(t={class:"col s5"},Object(g.a)(t,"class","center"),Object(g.a)(t,"children",Object(O.jsx)(N.Card,{actions:[Object(O.jsx)("a",{href:"#",class:"black-text",children:"Schedule a booking"},"1"),Object(O.jsx)("a",{href:"#",class:"black-text",children:"Contact this sitter"},"2")],className:"#e57373 red lighten-2",closeIcon:Object(O.jsx)(N.Icon,{children:"close"}),revealIcon:Object(O.jsx)(N.Icon,{children:"more_vert"}),textClassName:"white-text",title:e.sitterListings.first_name,children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(m.b,{to:"/sitterlisting/".concat(e.sitterListings.id),class:"black-text",children:"learn more about this sitter"})}),Object(O.jsx)("li",{children:Object(O.jsx)(T,{value:e.sitterListings.rating,text:"".concat(e.sitterListings.numReviews," reviews"),color:"#f8e825"})})]})})),t))})})})}function L(e){console.log("these are all sitter listing props",e);var t=e.allSitters.map((function(e){return console.log("all listing l",e),Object(O.jsx)("div",{children:Object(O.jsx)(P,{sitterListings:e})})}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{}),t]})}var A=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("footer",{class:"page-footer",children:[Object(O.jsx)("div",{class:"container",children:Object(O.jsxs)("div",{class:"row",children:[Object(O.jsxs)("div",{class:"col l6 s12",children:[Object(O.jsx)("h5",{class:"white-text",children:"About"}),Object(O.jsx)("p",{class:"grey-text text-lighten-4",children:"We are three software developers who wanted to create an easy and reliable source for pet owners to find a caretaker when they're busy or traveling. "})]}),Object(O.jsxs)("div",{class:"col l4 offset-l2 s12",children:[Object(O.jsx)("h5",{class:"white-text",children:"Contributors"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{class:"grey-text text-lighten-3",style:{textDecoration:"none"},href:"https://github.com/galyverasi",children:"Galyver Asi"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{class:"grey-text text-lighten-3",style:{textDecoration:"none"},href:"https://github.com/kellylarrea",children:"Kelly Larrea"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{class:"grey-text text-lighten-3",style:{textDecoration:"none"},href:"https://github.com/lawrencesalinas",children:"Lawrence Salinas"})})]})]})]})}),Object(O.jsx)("div",{class:"footer-copyright",children:Object(O.jsxs)("div",{class:"container",children:["\xa9 2022 Pawsibly",Object(O.jsx)("a",{class:"grey-text text-lighten-4 right",style:{textDecoration:"none"},href:"https://github.com/kellylarrea/pawsibly-react",children:"Learn more on GitHub"})]})})]})})},_=function(e){console.log("props in home for sitters",e);var t=Object(n.useState)([]),s=Object(i.a)(t,2),c=s[0],a=s[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"section white",children:Object(O.jsxs)("div",{className:"row container",class:"center-align",children:[Object(O.jsx)("h2",{className:"header",children:"find sitters near you by zip code"}),Object(O.jsx)("form",{onSubmit:function(t){t.preventDefault();var s=t.target.zipcode.value;console.log("sitter props",e.allSitters);var n=e.allSitters.filter((function(e){return e.city.toLowerCase().includes(s.toLowerCase())||e.zipcode.toString().includes(s.toString())}));a(n),console.log("sitters search results",n)},children:Object(O.jsxs)("div",{className:"input-field",children:[Object(O.jsx)("input",{id:"zipcode",type:"text",name:"zipcode",required:!0}),Object(O.jsx)("button",{type:"submit",class:"btn-floating btn-large waves-effect waves-light red accent-2",children:Object(O.jsx)("i",{class:"material-icons",children:"send"})}),Object(O.jsx)("label",{children:Object(O.jsx)(N.Icon,{children:"search"})})]})}),Object(O.jsx)(L,{allSitters:c})]})}),Object(O.jsxs)("div",{children:[Object(O.jsx)(N.Parallax,{image:Object(O.jsx)("img",{alt:"",src:"/static/images/cat.png"}),options:{responsiveThreshold:0}}),Object(O.jsx)("div",{className:"section white",children:Object(O.jsxs)("div",{className:"row container",class:"center-align",children:[Object(O.jsx)("h2",{className:"header",children:"search for a nearby sitter"}),Object(O.jsx)("p",{className:"grey-text text-darken-3 lighten-3",children:"With Pawsibly, your pet stays in a sitter's home, whether you're traveling for a few days or just out for the day. Here's how it works."}),Object(O.jsxs)("div",{class:"row",style:{marginTop:"50px"},children:[Object(O.jsxs)("div",{class:"col s4",children:[Object(O.jsx)("i",{class:"large material-icons",children:"search"}),Object(O.jsx)("h3",{children:"1. find a sitter near you"})]}),Object(O.jsxs)("div",{class:"col s4",children:[Object(O.jsx)("i",{class:"large material-icons",children:"schedule"}),Object(O.jsx)("h3",{children:"2. schedule a booking"})]}),Object(O.jsxs)("div",{class:"col s4",children:[Object(O.jsx)("i",{class:"large material-icons",children:"comment"}),Object(O.jsx)("h3",{children:"3. leave a review"})]})]})]})}),Object(O.jsx)(N.Parallax,{image:Object(O.jsx)("img",{alt:"",src:"static/images/dog.png"}),options:{responsiveThreshold:0}})]}),Object(O.jsx)(A,{})]})},I="https://aqueous-atoll-85096.herokuapp.com",D="http://localhost:8000",E="localhost"===window.location.hostname?D:I,z=s(16),F=s.n(z),G=function(e){return F()({method:"GET",url:"".concat(E,"/profile"),headers:{Authorization:"Token ".concat(e.token)}})},q=(s(210),s(239));function R(e){e.myPets.map((function(e){return Object(O.jsx)(m.b,{to:"/pets/".concat(e.id),children:e.name},e.id)}));return Object(O.jsxs)("div",{className:"profilepets",children:[Object(O.jsx)("h1",{children:"My Pets"}),Object(O.jsx)("div",{className:"profilepets_pet",children:e.myPets&&e.myPets.filter((function(e){return null!==e.name&&""!==e.name})).map((function(t){return Object(O.jsxs)("div",{className:"pet",children:[Object(O.jsxs)(m.b,{style:{textDecoration:"none",color:"black"},to:"/pets/".concat(t.id),children:[Object(O.jsx)(q.a,{src:t.image,className:"rounded-circle image"}),Object(O.jsx)("h4",{className:"pet_name",children:t.name})]},t.id),Object(O.jsx)("br",{}),Object(O.jsx)("button",{class:"btn-floating btn-small waves-effect waves-light red accent-2",style:{margin:"10px"},onClick:function(){return s=t.id,void F()({url:"http://localhost:8000/pets/".concat(s),method:"DELETE",headers:{Authorization:"Token ".concat(e.user.token)}}).then((function(t){console.log("pet deleted"),e.setTrigger((function(e){return!e}))})).catch((function(e){console.log(e)}));var s},children:Object(O.jsx)("i",{class:"material-icons",children:"delete"})})]})}))}),Object(O.jsx)("h6",{children:"add a pet"})]})}var H=s(54),U=s(243);function B(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),b=u[0],h=u[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(H.a,{variant:"warning",onClick:function(){return h(!0)},children:"Add Pet+"}),Object(O.jsxs)(U.a,{show:b,onHide:function(){return h(!1)},backdrop:"static",keyboard:!1,children:[Object(O.jsx)(U.a.Header,{closeButton:!0,children:Object(O.jsx)(U.a.Title,{children:"Add your Pet"})}),Object(O.jsxs)("label",{children:["Pet Name",Object(O.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:Object(O.jsx)("input",{type:"file",onChange:function(e){return j(e.target.files[0])}})}),Object(O.jsx)("br",{}),Object(O.jsx)(H.a,{onClick:function(){return function(t){var s=new FormData;s.append("image",l),s.append("name",c),s.append("pet_owner",e.user.id),fetch("".concat(E,"/pets"),{method:"POST",headers:{Authorization:"Token ".concat(e.user.token)},body:s}).then((function(t){console.log("new pet added",t),e.setTrigger((function(e){return!e}))})).catch((function(e){console.log(e)})),h(!1)}()},children:"Add Pet"})]})]})}var J=s(240),M=s(136),W=s(245);s(211);function K(e){console.log("user here",e);var t=Object(n.useState)(),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),l=(o[0],o[1]),j=Object(n.useState)([]),d=Object(i.a)(j,2),u=d[0],b=d[1],h=Object(n.useState)(!1),x=Object(i.a)(h,2),g=x[0],f=x[1],p=Object(n.useState)(!1),v=Object(i.a)(p,2),w=v[0],y=v[1];Object(n.useEffect)((function(){G(e.user).then((function(e){console.log("this is profile",e);var t=e.data.user,s=e.data.user.pets_owned;l(s),b(t)})).catch((function(e){return console.error(e)}))}),[g]),console.log(u);return Object(O.jsxs)("div",{className:"profile",children:[Object(O.jsxs)(J.a,{children:[Object(O.jsx)(M.a,{md:3,children:Object(O.jsxs)(W.a,{children:[Object(O.jsx)(q.a,{src:u.image,fluid:!0}),Object(O.jsx)(H.a,{variant:"success",onClick:function(){return y(!0)},children:"upload photo"}),Object(O.jsxs)(U.a,{show:w,onHide:function(){return y(!1)},backdrop:"static",keyboard:!1,children:[Object(O.jsx)(U.a.Header,{closeButton:!0,children:Object(O.jsx)(U.a.Title,{children:"upload photo"})}),Object(O.jsx)("label",{children:Object(O.jsx)("input",{type:"file",onChange:function(e){return a(e.target.files[0])}})}),Object(O.jsx)(H.a,{variant:"success ",onClick:function(){return function(t){var s=new FormData;s.append("image",c),s.append("id",u.id),fetch("".concat(E,"/profileImage"),{method:"POST",headers:{Authorization:"Token ".concat(e.user.token)},body:s}).then((function(e){console.log("new pehoto added",e),f((function(e){return!e}))})).catch((function(e){console.log(e)})),y(!1)}()},children:"upload"})]})]})}),Object(O.jsx)(M.a,{md:3,children:Object(O.jsxs)("div",{className:"profilescreen_info",children:[Object(O.jsxs)("h3",{class:"flow-text",children:["Hello, ",u.last_name,"!"]}),Object(O.jsxs)(J.a,{className:"profilescreen_buttons",children:[Object(O.jsx)(m.b,{className:"link",to:"/mybookings/".concat(e.user.id),children:Object(O.jsx)(H.a,{variant:"warning",children:"My Bookings"})}),Object(O.jsx)(m.b,{className:"link",to:"/myreviews/".concat(e.user.id),children:Object(O.jsx)(H.a,{variant:"warning",children:"My Reviews"})}),Object(O.jsx)(m.b,{className:"link",to:"/host",children:Object(O.jsx)(H.a,{variant:"warning",children:"Host a Pet"})})]})]})}),Object(O.jsx)(M.a,{className:"pt-5",children:Object(O.jsx)(m.b,{to:"/pets/",children:Object(O.jsx)(H.a,{variant:"warning",children:"My Pets"})})}),Object(O.jsx)(M.a,{children:Object(O.jsx)("i",{class:"fas fa-paw paw fa-10x"})})]}),Object(O.jsx)(A,{})]})}var Y=function(e){return F()({url:E+"/sign-in",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},Z="Successfully registered! You've been signed in as well.",$="Registration failed. Email may be taken, or passwords don't match.",Q="Welcome!",V="Failed to sign in. Check your email and password and try again.",X="Come back soon!",ee="Password changed successfully!",te="Failed to change passwords. Check your old password and try again.",se=s(15),ne=function(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),j=l[0],d=l[1],u=Object(n.useState)(""),b=Object(i.a)(u,2),h=b[0],x=b[1],g=Object(o.g)();return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Sign Up"}),Object(O.jsxs)(se.a,{onSubmit:function(t){t.preventDefault();var s=e.msgAlert,n=e.setUser,r={email:c,password:j,passwordConfirmation:h};(function(e){return F()({method:"POST",url:E+"/sign-up",data:{credentials:{email:e.email,password:e.password,password_confirmation:e.passwordConfirmation}}})})(r).then((function(){return Y(r)})).then((function(e){return n(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:Z,variant:"success"})})).then((function(){return g("/")})).catch((function(e){a(""),d(""),x(""),s({heading:"Sign Up Failed with error: "+e.message,message:$,variant:"danger"})}))},children:[Object(O.jsxs)(se.a.Group,{controlId:"email",children:[Object(O.jsx)(se.a.Label,{children:"Email address"}),Object(O.jsx)(se.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return a(e.target.value)}})]}),Object(O.jsxs)(se.a.Group,{controlId:"password",children:[Object(O.jsx)(se.a.Label,{children:"Password"}),Object(O.jsx)(se.a.Control,{required:!0,name:"password",value:j,type:"password",placeholder:"Password",onChange:function(e){return d(e.target.value)}})]}),Object(O.jsxs)(se.a.Group,{controlId:"passwordConfirmation",children:[Object(O.jsx)(se.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(se.a.Control,{required:!0,name:"passwordConfirmation",value:h,type:"password",placeholder:"Confirm Password",onChange:function(e){return x(e.target.value)}})]}),Object(O.jsx)(H.a,{variant:"warning",type:"submit",children:"Submit"})]})]})})},ce=function(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),j=l[0],d=l[1],u=Object(o.g)();return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Sign In"}),Object(O.jsxs)(se.a,{onSubmit:function(t){t.preventDefault(),console.log("the props",e);var s=e.msgAlert,n=e.setUser;Y({email:c,password:j}).then((function(e){return n(e.data.user)})).then((function(){return s({heading:"Sign In Success",message:Q,variant:"success"})})).then((function(){return u("/")})).catch((function(e){a(""),d(""),s({heading:"Sign In Failed with error: "+e.message,message:V,variant:"danger"})}))},children:[Object(O.jsxs)(se.a.Group,{controlId:"email",children:[Object(O.jsx)(se.a.Label,{children:"Email address"}),Object(O.jsx)(se.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return a(e.target.value)}})]}),Object(O.jsxs)(se.a.Group,{controlId:"password",children:[Object(O.jsx)(se.a.Label,{children:"Password"}),Object(O.jsx)(se.a.Control,{required:!0,name:"password",value:j,type:"password",placeholder:"Password",onChange:function(e){return d(e.target.value)}})]}),Object(O.jsx)(H.a,{variant:"warning",type:"submit",children:"Submit"})]})]})})},ae=s(241),re=function(e){var t=e.msgAlert,s=e.clearUser,n=e.user;console.log(e);var c=Object(o.g)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h2",{children:"Are you sure you want to sign out?"}),Object(O.jsx)("small",{children:"We hate to see you go..."}),Object(O.jsx)("br",{}),Object(O.jsxs)(ae.a,{children:[Object(O.jsx)(H.a,{variant:"danger",onClick:function(){(function(e){return F()({url:E+"/sign-out",method:"DELETE",headers:{Authorization:"Token token=".concat(e.token)}})})(n).finally((function(){return t({heading:"Signed Out Successfully",message:X,variant:"success"})})).finally((function(){return c("/")})).finally((function(){return s()}))},children:"Sign Out"}),Object(O.jsx)(H.a,{variant:"warning",onClick:function(){c("/")},children:"Cancel"})]})]})})})},ie=function(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),j=l[0],d=l[1],u=Object(o.g)();return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Change Password"}),Object(O.jsxs)(se.a,{onSubmit:function(t){t.preventDefault();var s=e.msgAlert,n=e.user;console.log("the user",n),function(e,t){return F()({url:E+"/change-password",method:"PATCH",headers:{Authorization:"Token token=".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})}({oldPassword:c,newPassword:j},n).then((function(){return s({heading:"Change Password Success",message:ee,variant:"success"})})).then((function(){return u("/")})).catch((function(e){a(""),d(""),s({heading:"Change Password Failed with error: "+e.message,message:te,variant:"danger"})}))},children:[Object(O.jsxs)(se.a.Group,{controlId:"oldPassword",children:[Object(O.jsx)(se.a.Label,{children:"Old password"}),Object(O.jsx)(se.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return a(e.target.value)}})]}),Object(O.jsxs)(se.a.Group,{controlId:"newPassword",children:[Object(O.jsx)(se.a.Label,{children:"New Password"}),Object(O.jsx)(se.a.Control,{required:!0,name:"newPassword",value:j,type:"password",placeholder:"New Password",onChange:function(e){return d(e.target.value)}})]}),Object(O.jsx)(H.a,{variant:"warning",type:"submit",children:"Submit"})]})]})})};function oe(e){var t,s,c=Object(n.useState)([]),a=Object(i.a)(c,2),r=a[0],l=a[1],j=Object(n.useState)(""),d=Object(i.a)(j,2),u=d[0],b=d[1],h=Object(n.useState)(),x=Object(i.a)(h,2),g=x[0],f=x[1],p=Object(o.h)().id;Object(n.useEffect)((function(){F()({url:"".concat(E,"/pets/").concat(p),method:"GET",headers:{Authorization:"Token ".concat(e.user.token)}}).then((function(e){var t,s,n,c;console.log("pet",e),l(e),b(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(s=t.pet)||void 0===s?void 0:s.name),f(null===e||void 0===e||null===(n=e.data)||void 0===n||null===(c=n.pet)||void 0===c?void 0:c.id),console.log("all",e)})).catch((function(e){console.log(e)}))}),[p,e.user.token]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Pet Details"}),Object(O.jsx)("p",{children:r&&(null===r||void 0===r||null===(t=r.data)||void 0===t||null===(s=t.pet)||void 0===s?void 0:s.pet_owner)}),Object(O.jsx)("input",{value:u,onChange:function(e){return b(e.target.value)}}),Object(O.jsxs)("button",{onClick:function(){return function(t){var s={pet:{name:u}};fetch("http://localhost:8000/pets/".concat(t),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(e.user.token)},body:JSON.stringify(s)}).then((function(t){console.log("pet edited",t),e.setTrigger((function(e){return!e}))})).catch((function(e){console.log(e)}))}(g)},children:["Update ",g]})]})}var le=s(108),je=s.n(le),de=s(137),ue=(s(213),s(214),s(138)),be=s(242);s(229);function he(e){Object(o.g)();var t=Object(n.useState)(new Date),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(new Date),l=Object(i.a)(r,2),j=l[0],d=l[1],u=Object(o.h)().id,b={startDate:c,endDate:j,key:"selection"};return Object(O.jsx)(be.a,{children:Object(O.jsx)("div",{class:"createbooking col text-center",children:Object(O.jsx)(J.a,{children:Object(O.jsxs)(M.a,{children:[Object(O.jsx)(ue.DateRange,{className:"datepicker",ranges:[b],onChange:function(e){a(e.selection.startDate),d(e.selection.endDate),console.log(c),console.log("end",j)},name:"date",id:"date"}),Object(O.jsx)(H.a,{className:"createbooking_button",variant:"warning",onClick:function(t){t.preventDefault();var s={pet_owner:e.user.id,start_date:c,end_date:j,sitter:"".concat(u)};fetch("http://localhost:8000/bookings",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(e.user.token)},body:JSON.stringify(s)}).then((function(e){console.log("new booking added",e)})).catch((function(e){console.log(e)}))},children:"add"})]})})})})}s(230);var Oe=function(e){return Object(O.jsxs)("div",{className:"reviewlist",children:[Object(O.jsx)("h4",{children:e.review.pet_owner.first_name}),Object(O.jsx)(T,{value:e.review.rating,color:"#f8e825"}),Object(O.jsxs)("p",{children:["review:",e.review.review]})]})};s(231);function xe(e){console.log("sitter listing detail props",e);var t=Object(n.useState)([]),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)([]),l=Object(i.a)(r,2),j=l[0],d=l[1],u=Object(o.h)().id;return Object(n.useEffect)((function(){F()({url:"".concat(E,"/sitters/").concat(u),method:"GET"}).then((function(e){console.log("this is single sitter",e.data.sitter.id),a(e.data.sitter)}))}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(de.a)(je.a.mark((function e(){var t,s;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("http://localhost:8000/reviews/".concat(u));case 2:t=e.sent,s=t.data,d(s.reviews);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{className:"listingdetail",children:[Object(O.jsxs)(J.a,{children:[Object(O.jsxs)("h1",{children:[c.first_name," ",c.last_name," "]}),Object(O.jsxs)(J.a,{children:[Object(O.jsx)(M.a,{md:2,children:Object(O.jsx)(T,{value:c.rating,text:"".concat(c.numReviews," reviews"),color:"#f8e825"})}),Object(O.jsx)(M.a,{md:6,children:Object(O.jsxs)("h5",{children:[c.city,", ",c.zipcode]})})]}),Object(O.jsx)(J.a,{children:Object(O.jsx)(q.a,{src:"/cat.png"})}),Object(O.jsx)("hr",{}),Object(O.jsxs)(J.a,{children:[Object(O.jsxs)(M.a,{md:8,className:"mt-5",children:[Object(O.jsx)("h2",{children:"About"}),c.description]}),Object(O.jsx)(M.a,{md:4,children:Object(O.jsxs)("div",{className:"booking",children:[Object(O.jsxs)(J.a,{children:[Object(O.jsx)(M.a,{md:5,children:Object(O.jsxs)("h5",{children:["$",c.price," / night"]})}),Object(O.jsx)(M.a,{children:Object(O.jsx)(T,{value:c.rating,text:"".concat(c.numReviews," reviews"),color:"#f8e825"})})]}),Object(O.jsx)(he,{user:e.user})]})})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"Reviews"}),Object(O.jsxs)(J.a,{children:[Object(O.jsx)(M.a,{md:6,children:Object(O.jsx)("div",{className:"sitterreviews",children:j.map((function(e){return Object(O.jsx)("li",{className:"list",children:Object(O.jsx)(Oe,{review:e})},e.id)}))})}),Object(O.jsx)(M.a,{md:6,children:Object(O.jsx)(W.a,{children:Object(O.jsxs)("div",{className:"reviewbox",children:[Object(O.jsx)("h3",{children:"Review this sitter"}),Object(O.jsx)("h5",{children:"share your thought with other pet owners"}),Object(O.jsx)(m.b,{to:"/review/".concat(c.id),class:"btn-floating btn-large waves-effect waves-light yellow",children:Object(O.jsx)("i",{class:"material-icons",children:"comment"})})]})})})]})]}),Object(O.jsx)(A,{})]})}function ge(e){console.log("this is props for the review of sitter",e);var t=Object(n.useState)([]),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),j=l[0],d=l[1],u=Object(n.useState)(0),b=Object(i.a)(u,2),h=b[0],x=b[1],g=Object(o.g)(),f=Object(o.h)().id;Object(n.useEffect)((function(){console.log("getting single sitter"),p()}),[]);var p=function(){F()({url:"".concat(E,"/sitters/").concat(f),method:"GET"}).then((function(e){console.log("this is single sitter in review form",e),a(e)}))};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(N.TextInput,{id:"TextInput-25"}),Object(O.jsx)("h1",{children:"Create a Review"}),Object(O.jsx)("label",{htmlFor:"name",children:"Review:"}),Object(O.jsx)("input",{type:"text",name:"review",id:"review",value:j,onChange:function(e){return d(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"name",children:"Rating:"}),Object(O.jsx)("input",{type:"number",name:"rating",id:"rating",value:h,onChange:function(e){return x(e.target.value)}}),Object(O.jsx)("button",{onClick:function(t){t.preventDefault();var s={pet_owner:e.user.id,sitter:c.data.sitter.id,review:j,rating:h};fetch("".concat(E,"/reviews"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(e.user.token)},body:JSON.stringify(s)}).then((function(e){console.log("new review added",e)})).then((function(){return g("/sitterlisting/".concat(f))})).catch((function(e){console.log(e)}))},children:"Created Review"})]})})}function fe(e){return console.log("boking card",e),Object(O.jsx)("div",{class:"container small",children:Object(O.jsx)("div",{class:"row center-cols justify-center",children:Object(O.jsx)(N.Row,{class:"small center-align",children:Object(O.jsx)("div",{class:"col s6 offset-s3",children:Object(O.jsxs)(N.Card,{className:"card",actions:[Object(O.jsx)("a",{href:"#",children:"Back To Top"},"1")],closeIcon:Object(O.jsx)(N.Icon,{children:"close"}),header:Object(O.jsx)(N.CardTitle,{image:"https://images.pexels.com/photos/5731822/pexels-photo-5731822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}),revealIcon:Object(O.jsx)(N.Icon,{children:"more_vert"}),title:e.bookingListings.sitter,children:[Object(O.jsxs)("div",{children:["Booking #",e.bookingListings.id]}),Object(O.jsxs)("div",{children:["Start Date: ",e.bookingListings.start_date]}),Object(O.jsxs)("div",{children:["End Date: ",e.bookingListings.end_date]}),Object(O.jsx)(m.b,{to:"/sitterListing/".concat(e.bookingListings.id),children:"Go to Sitter Page"})]})})})})})}function pe(e){console.log("these are all booking listing props",e);var t=e.userBooking.map((function(e){return console.log("all listing b",e),Object(O.jsx)("div",{children:Object(O.jsx)(fe,{bookingListings:e})})}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{class:"center-align",children:"All Bookings:"}),t]})}function me(e){console.log("what are these props",e);var t=Object(n.useState)([]),s=Object(i.a)(t,2),c=s[0],a=s[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){F()({url:"".concat(E,"/bookings"),method:"GET",headers:{Authorization:"Token ".concat(e.user.token)}}).then((function(e){console.log("this is user bookings",e.data.bookings),a(e.data.bookings)}))};return Object(O.jsx)("div",{children:Object(O.jsx)(pe,{userBooking:c})})}function ve(e){return console.log("user review props at profile",e),Object(O.jsx)("div",{class:"container small",children:Object(O.jsx)("div",{class:"row center-cols justify-center",children:Object(O.jsx)(N.Row,{class:"small center-align",children:Object(O.jsx)("div",{class:"col s6 offset-s3",children:Object(O.jsxs)(N.Card,{className:"card",actions:[Object(O.jsx)("a",{href:"#",children:"Back To Top"},"1")],closeIcon:Object(O.jsx)(N.Icon,{children:"close"}),header:Object(O.jsx)(N.CardTitle,{image:"https://images.pexels.com/photos/5731822/pexels-photo-5731822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}),revealIcon:Object(O.jsx)(N.Icon,{children:"more_vert"}),title:e.reviewListing.sitter,children:[Object(O.jsx)("p",{children:e.reviewListing.id}),Object(O.jsx)("p",{children:e.reviewListing.rating}),Object(O.jsx)("p",{children:e.reviewListing.review}),Object(O.jsx)(m.b,{to:"/sitterListing/".concat(e.reviewListing.id),children:"Go to Sitter Page"})]})})})})})}function we(e){var t=e.review.map((function(e){return console.log("all listing r",e),Object(O.jsxs)("div",{children:[Object(O.jsx)(ve,{reviewListing:e}),Object(O.jsx)("hr",{})]})}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{class:"center",children:"These are the reviews I posted:"}),Object(O.jsx)("li",{children:t})]})}function ye(e){console.log("userreview props",e);var t=Object(n.useState)([]),s=Object(i.a)(t,2),c=s[0],a=s[1];Object(n.useEffect)((function(){r()}),[]);Object(o.h)();var r=function(){F()({url:"".concat(E,"/reviews"),method:"GET",headers:{Authorization:"Token ".concat(e.user.token)}}).then((function(e){console.log("this is reviews",e.data.reviews),a(e.data.reviews)}))};return Object(O.jsx)("div",{children:Object(O.jsx)(we,{review:c})})}function ke(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(n.useState)(""),u=Object(i.a)(d,2),b=u[0],h=u[1],x=Object(n.useState)(0),g=Object(i.a)(x,2),f=g[0],p=g[1],m=Object(n.useState)(""),v=Object(i.a)(m,2),w=v[0],y=v[1],k=Object(n.useState)(""),S=Object(i.a)(k,2),C=S[0],N=S[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Host a Pet"}),Object(O.jsx)("label",{children:"First Name"}),Object(O.jsx)("input",{className:"input",type:"text",required:!0,value:c,first_name:"first_name",id:"name",onChange:function(e){return a(e.target.value)}}),Object(O.jsx)("label",{children:"Last Name"}),Object(O.jsx)("input",{className:"input",type:"text",required:!0,value:l,last_name:"last_name",id:"last_name",onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("label",{children:"Zipcode"}),Object(O.jsx)("input",{className:"input",type:"text",required:!0,value:b,name:"zipcode",id:"zipcode",onChange:function(e){return h(e.target.value)}}),Object(O.jsx)("label",{children:"Price"}),Object(O.jsx)("input",{className:"input",type:"text",required:!0,value:f,name:"price",id:"price",onChange:function(e){return p(e.target.value)}}),Object(O.jsx)("label",{children:"Description"}),Object(O.jsx)("input",{className:"input",type:"text",required:!0,value:w,name:"description",id:"description",onChange:function(e){return y(e.target.value)}}),Object(O.jsx)("label",{children:"City"}),Object(O.jsx)("input",{className:"input",type:"text",required:!0,value:C,name:"city",id:"city",onChange:function(e){return N(e.target.value)}}),Object(O.jsx)(H.a,{onClick:function(t){var s={first_name:c,last_name:l,zipcode:b,price:f,city:C,description:w};fetch("".concat(E,"/sitters"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(e.user.token)},body:JSON.stringify(s)}).then((function(t){e.setTrigger((function(e){return!e})),console.log("created post",t)})).catch((function(e){console.log(e)}))},variant:"success",children:"Post"})]})}var Se=function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(ke,{setTrigger:e.setTrigger,user:e.user})})};s(232);var Ce=function(e){var t=Object(n.useState)([]),s=Object(i.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2);return u[0],u[1],Object(n.useEffect)((function(){G(e.user).then((function(e){console.log("this is profile",e);var t=e.data.user.pets_owned;a(t)})).catch((function(e){return console.error(e)}))}),[l]),Object(O.jsxs)("div",{className:"pet_screen",children:[Object(O.jsx)(R,{myPets:c,user:e.user,setTrigger:j}),Object(O.jsx)("div",{className:"createpets",children:Object(O.jsx)(B,{user:e.user,setTrigger:j})})]})},Ne=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)([]),r=Object(i.a)(a,2),j=r[0],d=r[1],u=Object(n.useState)([]),b=Object(i.a)(u,2),h=b[0],g=b[1],f=Object(n.useState)(!1),p=Object(i.a)(f,2),m=p[0],v=p[1],w=function(e){d((function(t){return t.filter((function(t){return t.id!==e}))}))},y=function(e){var t=e.heading,s=e.message,n=e.variant,c=Object(l.a)();d((function(){return[{heading:t,message:s,variant:n,id:c}]}))};Object(n.useEffect)((function(){console.log("getting all sitters"),k()}),[m]);var k=function(){F()({url:"".concat(E,"/sitters"),method:"GET"}).then((function(e){g(e.data.sitters),console.log("all sitters:",e.data.sitters)})).catch((function(e){console.log(e)}))};return Object(O.jsxs)(n.Fragment,{children:[Object(O.jsx)(S,{user:s}),Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{path:"/",element:Object(O.jsx)(_,{msgAlert:y,allSitters:h,user:s})}),Object(O.jsx)(o.b,{path:"/sitterlistings",element:Object(O.jsx)(L,{allSitters:h})}),Object(O.jsx)(o.b,{path:"/sitterlisting/:id",element:Object(O.jsx)(xe,{allSitters:h,user:s})}),Object(O.jsx)(o.b,{path:"/review/:id",element:Object(O.jsx)(ge,{allSitters:h,user:s})}),Object(O.jsx)(o.b,{path:"/myreviews/:id",element:Object(O.jsx)(ye,{user:s})}),Object(O.jsx)(o.b,{path:"/mybookings/:id",element:Object(O.jsx)(me,{user:s})}),Object(O.jsx)(o.b,{path:"/profile",element:Object(O.jsx)(K,{user:s})}),Object(O.jsx)(o.b,{path:"/host",element:Object(O.jsx)(Se,{setTrigger:v,user:s,allSitters:h})}),Object(O.jsx)(o.b,{path:"/sign-up",element:Object(O.jsx)(ne,{msgAlert:y,setUser:c})}),Object(O.jsx)(o.b,{path:"/sign-in",element:Object(O.jsx)(ce,{msgAlert:y,setUser:c})}),Object(O.jsx)(o.b,{path:"/pets",element:Object(O.jsx)(Ce,{msgAlert:y,user:s})}),Object(O.jsx)(o.b,{path:"/pets/:id",element:Object(O.jsx)(oe,{msgAlert:y,user:s})}),Object(O.jsx)(o.b,{path:"/sign-out",element:Object(O.jsx)(C,{user:s,children:Object(O.jsx)(re,{msgAlert:y,clearUser:function(){c(null)},user:s})})}),Object(O.jsx)(o.b,{path:"/change-password",element:Object(O.jsx)(C,{user:s,children:Object(O.jsx)(ie,{msgAlert:y,user:s})})})]}),j.map((function(e){return Object(O.jsx)(x,{heading:e.heading,variant:e.variant,message:e.message,id:e.id,deleteAlert:w},e.id)}))]})};s(233);r.a.render(Object(O.jsx)(m.a,{children:Object(O.jsx)(Ne,{})}),document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.fbabbbc1.chunk.js.map