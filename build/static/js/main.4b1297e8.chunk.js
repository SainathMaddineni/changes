(this.webpackJsonpslopetareapp=this.webpackJsonpslopetareapp||[]).push([[0],{35:function(e,t,a){e.exports=a(74)},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),s=(a(40),a(41),a(3)),o=a(4),i=a(6),m=a(5),u=a(11),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"branding"},r.a.createElement("h1",{style:{color:"yellow"}}," Slope Rate Tech Private Limited ")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(u.b,{to:"/signup"},"SIGNUP"),r.a.createElement(u.b,{to:"/login"},"LOGIN"),r.a.createElement(u.b,{to:"/contactus"},"CONTACT US"),r.a.createElement(u.b,{to:"/aboutus"},"ABOUT US"),r.a.createElement(u.b,{to:"/services"},"SERVICES"),r.a.createElement(u.b,{to:"/home"},"HOME"))))))}}]),a}(n.Component),E=a(12),p=(a(47),new RegExp(/^[0-9]{10}$/)),h=new RegExp(/^[0-9]{6}$/),g=new RegExp(/^[a-zA-Z]+$/),v=new RegExp(/^[0-9]{8,25}$/),b=new RegExp(/^[\w-+]+(\.[\w]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/),f={firstname:"",lastname:"",mail:"",country:"",password:"",street:"",state:"",city:"",zipcode:"",contactnumber:"",confirmpassword:"",streetError:"",cityError:"",stateError:"",firstnameError:"",lastnameError:"",emailError:"",passwordError:"",phonenumberError:"",confirmpasswordError:"",zipcodeError:"",next:!1},w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state=f,e.handlefirstName=function(t){e.setState({firstname:t.target.value})},e.handlelastName=function(t){e.setState({lastname:t.target.value})},e.handleEmail=function(t){e.setState({mail:t.target.value})},e.handlezipcode=function(t){e.setState({zipcode:t.target.value})},e.handlepassword=function(t){e.setState({password:t.target.value})},e.handleconfirmpassword=function(t){e.setState({confirmpassword:t.target.value})},e.handlenumber=function(t){e.setState({contactnumber:t.target.value})},e.handlestreet=function(t){e.setState({street:t.target.value})},e.handlestate=function(t){e.setState({state:t.target.value})},e.handlecity=function(t){e.setState({city:t.target.value})},e.handlecountry=function(t){e.setState({country:t.target.value})},e.validate=function(t){var a="",n="",r="",l="",c="",s="",o="",i="",m="",u="";return g.test(e.state.firstname)||(a="space not allowed"),g.test(e.state.lastname)||(n="should not be empty"),b.test(e.state.mail)||(r="invalid email"),e.state.street||(m="should not empty"),g.test(e.state.state)||(u="only contains characters"),g.test(e.state.city)||(i="allow only characters"),h.test(e.state.zipcode)||(l="enter Zipcode"),v.test(e.state.password)||(c="only numbers and length should be (8-25)"),p.test(e.state.contactnumber)||(s="invalid phone number"),e.state.confirmpassword!==e.state.password&&(o="Both passwords Should Match"),!(r||a||c||o||s||n||u||m||i||l)||(e.setState({emailError:r,firstnameError:a,lastnameError:n,passwordError:c,zipcodeError:l,confirmpasswordError:o,phonenumberError:s,cityError:i,streetError:m,stateError:u}),!1)},e.handleSubmit=function(t){t.preventDefault(),e.validate()&&(e.props.history.push("/login"),e.setState(f))},e.validate=e.validate.bind(Object(E.a)(e)),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"box2"},r.a.createElement("div",{className:"container5"},r.a.createElement("h1",null,"SIGNUP HERE"),r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"fname"},"FirstName:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.handlefirstName(t)},value:this.state.firstname,id:"fname",name:"fname",required:!0}),r.a.createElement("label",{htmlFor:"lname",className:"left"},"LastName:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.handlelastName(t)},value:this.state.lastname,id:"lname",name:"lname",required:!0}),r.a.createElement("div",{className:"leftnameerr"},this.state.firstnameError),r.a.createElement("div",{className:"rightnameerr"},this.state.lastnameError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"str"},"Street:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.handlestreet(t)},value:this.state.street,id:"str",name:"Street",required:!0}),r.a.createElement("label",{htmlFor:"cty",className:"left"},"City             :"),r.a.createElement("input",{type:"text",onChange:function(t){return e.handlecity(t)},value:this.state.city,id:"cty",name:"city",required:!0}),r.a.createElement("div",{className:"leftnameerr"},this.state.streetError),r.a.createElement("div",{className:"rightnameerr"},this.state.cityError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"state"},"State  :"),r.a.createElement("input",{type:"text",onChange:function(t){return e.handlestate(t)},value:this.state.state,id:"state",name:"state",required:!0}),r.a.createElement("label",{htmlFor:"zc",className:"left"},"ZipCode:"),r.a.createElement("input",{type:"number",onChange:function(t){return e.handlezipcode(t)},value:this.state.zipcode,id:"zc",name:"zipcode",required:!0}),r.a.createElement("div",{className:"leftnameerr"},this.state.stateError),r.a.createElement("div",{className:"rightnameerr"},this.state.zipcodeError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"cntry"},"Country  :"),r.a.createElement("select",{name:"country",value:this.state.country,onChange:function(t){return e.handlecountry(t)},id:"cntry"},r.a.createElement("option",{defaultValue:"usa"},"USA"),r.a.createElement("option",{value:"india"},"INDIA"),r.a.createElement("option",{value:"australia"},"AUSTRALIA"),r.a.createElement("option",{value:"canada"},"CANADA")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"pw"},"Password:"),r.a.createElement("input",{type:"password",id:"pw",onChange:function(t){return e.handlepassword(t)},value:this.state.password,name:"password",required:!0}),r.a.createElement("div",{className:"specialnameerr"},this.state.passwordError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"pw"},"Confirm Password:"),r.a.createElement("input",{type:"password",onChange:function(t){return e.handleconfirmpassword(t)},value:this.state.confirmpassword,id:"cpw",name:"password",required:!0}),r.a.createElement("div",{className:"specialnameerr"},this.state.confirmpasswordError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"ml"},"Email:"),r.a.createElement("input",{type:"email",onChange:function(t){return e.handleEmail(t)},value:this.state.email,id:"ml",name:"email",required:!0}),r.a.createElement("div",{className:"specialnameerr"},this.state.emailError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"ph"},"Phone  :"),r.a.createElement("select",{name:"country",id:"ph"},r.a.createElement("option",{defaultValue:"+91"},"+91"),r.a.createElement("option",{value:"+1"},"+1"),r.a.createElement("option",{value:"+61"},"+61"),r.a.createElement("option",{value:"+1"},"+1")),r.a.createElement("input",{type:"phone",onChange:function(t){return e.handlenumber(t)},value:this.state.contactnumber,id:"phone",name:"phone",required:!0}),r.a.createElement("div",{className:"specialnameerr"},this.state.phonenumberError),r.a.createElement("button",{className:"button1",vlaue:"Next",onClick:this.handleSubmit},r.a.createElement("span",null,"submit"))),r.a.createElement("br",null))))),r.a.createElement("div",{className:"box1"},r.a.createElement("img",{className:"image1",src:"/images/emp.png",alt:"img not found"})),r.a.createElement("div",{className:"footercss"},r.a.createElement("footer",null,r.a.createElement("p",null,"SlopeRateTech,Copyright\xa92020"))))}}]),a}(n.Component),y=a(1),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("section",{id:"showcase"},r.a.createElement("div",{className:"container1"}),r.a.createElement("div",null,r.a.createElement("img",{src:"/images/i.jpg",alt:"img not found"}),r.a.createElement("h1",null," Predict the future with innovative techonologies.....")),r.a.createElement("div",{className:"cbox"},r.a.createElement("p",null,"Software innovation,Like almost every other kind of innovation,requires the ability to collaborate and share ideas with other people, and to sit down and talk with customers and get their feedback and understand their needs...."))),r.a.createElement("section",{id:"newsletter"},r.a.createElement("div",{className:"container1"},r.a.createElement("h1",null," Subscribe to our news update"),r.a.createElement("form",null,r.a.createElement("input",{type:"email",placeholder:"Enter email"}),r.a.createElement("button",{type:"submit",className:"button_1"},"Subscribe")))),r.a.createElement("section",{id:"boxes"},r.a.createElement("div",{className:"container1"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/z3.jpg",className:"bgimg",alt:"img not found"})),r.a.createElement("div",{className:"box"},r.a.createElement("img",{src:"/images/vision.png",className:"vimg",alt:"img not found"}),r.a.createElement("div",{className:"vbox"},r.a.createElement("p",null,"We are passionate in helping businesses through innovative technologies to reach and maximize their business dreams"),r.a.createElement("p",null," we strive to become a global software and web-developmant company"))),r.a.createElement("div",{className:"box"},r.a.createElement("img",{src:"/images/mission_1.png",className:"mimg",alt:"img not found"}),r.a.createElement("div",{className:"mbox"},r.a.createElement("p",null,"It is through our passion and commitment to our clients what we develop software to face real-world challenges."),r.a.createElement("p",null,"It is for our love and dedication to what we do that enables us to become a better company for ourselves,for clients,our community and the world")))))))}}]),a}(n.Component),x=(a(48),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"servicebox"},r.a.createElement("div",{className:"serives"},r.a.createElement("h2",null,"Our Services")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"services-box1"},r.a.createElement("img",{src:"./images/web-development.png",alt:"img not found",width:"70",height:"60"}),r.a.createElement("h3",null,"Web Developement"),r.a.createElement("input",{type:"checkbox",id:"toggle"}),r.a.createElement("label",{htmlFor:"toggle"},"Load More"),r.a.createElement("dialog",null,r.a.createElement("p",null,"web developement"),r.a.createElement("label",{htmlFor:"toggle"},"close"))),r.a.createElement("div",{className:"services-box2"},r.a.createElement("img",{src:"./images/mobile.png",alt:"img not found",width:"70",height:"60"}),r.a.createElement("h3",null,"Mobile Developement(Android/IOS)"),r.a.createElement("input",{type:"checkbox",id:"togglem"}),r.a.createElement("label",{htmlFor:"togglem"},"Load More"),r.a.createElement("dialog",null,r.a.createElement("p",null,"Mobile Developement"),r.a.createElement("label",{htmlFor:"togglem"},"close"))),r.a.createElement("div",{className:"services-box3"},r.a.createElement("img",{src:"./images/analytics.png",alt:"img not found",width:"60",height:"50"}),r.a.createElement("h3",null,"Analytics Design"),r.a.createElement("input",{type:"checkbox",id:"togglea"}),r.a.createElement("label",{htmlFor:"togglea"},"Load More"),r.a.createElement("dialog",null,r.a.createElement("p",null,"Analytics Design"),r.a.createElement("label",{htmlFor:"togglea"},"close")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"services-box1"},r.a.createElement("img",{src:"./images/innovation.png",alt:"img not found",width:"70",height:"60"}),r.a.createElement("h3",null,"Artificial Innovation"),r.a.createElement("input",{type:"checkbox",id:"togglei"}),r.a.createElement("label",{htmlFor:"togglei"},"Load More"),r.a.createElement("dialog",null,r.a.createElement("p",null,"Artificial Innovation"),r.a.createElement("label",{htmlFor:"togglei"},"close"))),r.a.createElement("div",{className:"services-box2"},r.a.createElement("img",{src:"./images/design.png",alt:"img not found",width:"70",height:"60"}),r.a.createElement("h3",null,"Business Design"),r.a.createElement("input",{type:"checkbox",id:"toggleb"}),r.a.createElement("label",{htmlFor:"toggleb"},"Load More"),r.a.createElement("dialog",null,r.a.createElement("p",null,"Business Design"),r.a.createElement("label",{htmlFor:"toggleb"},"close"))),r.a.createElement("div",{className:"services-box3"},r.a.createElement("img",{src:"./images/service.svg",alt:"img not found",width:"60",height:"50"}),r.a.createElement("h3",null,"School Book/Other Services"),r.a.createElement("input",{type:"checkbox",id:"toggleo"}),r.a.createElement("label",{htmlFor:"toggleo"},"Load More"),r.a.createElement("dialog",null,r.a.createElement("p",null,"other services"),r.a.createElement("label",{htmlFor:"toggleo"},"close")))))}}]),a}(n.Component)),O=(a(49),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"aboutus"},r.a.createElement("h2",null,"About us")),r.a.createElement("div",null,r.a.createElement("fieldset",{className:"fieldbox"},r.a.createElement("div",{className:"ceo"},r.a.createElement("p",{className:"paragraph"},"Founder&CEO"),r.a.createElement("img",{src:"/images/img.jpg",width:"400",height:"450",alt:"ceo"}),r.a.createElement("div",{className:"ceo-fadedbox"},r.a.createElement("div",{className:"title text"},"Founder and CEO of slope rate tech Animated Text Over a Faded Image on Hover Animated Text Over a Faded Image on Hover Animated Text Over a Faded Image on Hover Animated Text Over a Faded Image on Hover Animated Text Over a Faded Image on Hover"))),r.a.createElement("div",{className:"company-text"},r.a.createElement("p",null,"This paragraph is regarding about company you will know everything from here This paragraph is regarding about company you will know everything from here This paragraph is regarding about company you will know everything from here This paragraph is regarding about company you will know everything from here"))))))}}]),a}(n.Component)),S=(a(50),a(32)),A=a.n(S),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.sendEmail=function(e){e.preventDefault(),A.a.sendForm("service_3msx1cy","template_umaz3ui",e.target,"user_YlA2tOwXskWS8BV0IGhCI").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:"/images/15.jpg",className:"img1",alt:"img not found"}),r.a.createElement("div",{className:"tbox"},r.a.createElement("h1",null,"Contact US"),r.a.createElement("p",null,"Let in touch with us "))),r.a.createElement("div",{className:"boxf"},r.a.createElement("div",{className:"contactadj"},r.a.createElement("div",{className:"contactform"},r.a.createElement("h2",null,"Send a Message"),r.a.createElement("form",{onSubmit:this.sendEmail},r.a.createElement("div",{className:"formBox"},r.a.createElement("div",{className:"inputBox w50"},r.a.createElement("input",{type:"text",name:"firstname",required:!0}),r.a.createElement("span",null,"First Name ")),r.a.createElement("div",{className:"inputBox w50"},r.a.createElement("input",{type:"text",name:"lastname",required:!0}),r.a.createElement("span",null,"Last Name ")),r.a.createElement("div",{className:"inputBox w50"},r.a.createElement("input",{type:"text",name:"email",required:!0}),r.a.createElement("span",null,"Email Address ")),r.a.createElement("div",{className:"inputBox w50"},r.a.createElement("input",{type:"text",name:"phonenumber",required:!0}),r.a.createElement("span",null,"Mobile Number ")),r.a.createElement("div",{className:"inputBox w100"},r.a.createElement("textarea",{name:"message",required:!0}),r.a.createElement("span",null,"Write Your Message Here..... ")),r.a.createElement("div",{className:"inputBox w100"},r.a.createElement("input",{type:"submit",value:"send"})))))),r.a.createElement("div",{className:"locbox"},r.a.createElement("img",{src:"/images/contactus1.jpg",className:"contactimage",alt:"img not found"})),r.a.createElement("div",{className:"emailcon"},r.a.createElement("div",{className:"lctncomBox"},r.a.createElement("img",{src:"/images/emailnew.png",className:"contactimg",alt:"img not found"}),r.a.createElement("h2",null,"Email Address"),r.a.createElement("p",null,"admin@sloperateinc.com"),r.a.createElement("div",{className:"fax"},r.a.createElement("h3",null,"Fax"),r.a.createElement("h5",null,"*******")))),r.a.createElement("div",{className:"locationcon"},r.a.createElement("div",{className:"lctncomBox"},r.a.createElement("img",{src:"/images/phonenew.png",className:"contactimg",alt:"img not found"}),r.a.createElement("h2",null,"Mobile INDIA"),r.a.createElement("p",null,"+91 9676337065"),r.a.createElement("div",{className:"fax"},r.a.createElement("h3",null,"Mobile Overseas"),r.a.createElement("h5",null,"+1(502)654-2695")))),r.a.createElement("div",{className:"phonecon"},r.a.createElement("div",{className:"lctncomBox"},r.a.createElement("img",{src:"/images/locationnew.png",className:"contactimg",alt:"img not found"}),r.a.createElement("h2",null,"Address"),r.a.createElement("p",null,"SLOPE RATE TECHNO PRIVATE LIMITED CAF Road,Patamatalanka, Benz Circle Vijayawada, Andhra Pradesh, India - 520010"),r.a.createElement("div",{className:"fax"})))))}}]),a}(n.Component),C=(a(53),new RegExp(/^[\w-+]+(\.[\w]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/)),F=new RegExp(/^[0-9]{8,25}$/),k={emailAddress:"",password:"",usernameError:"",passwordError:""},I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state=k,e.handleUserName=function(t){e.setState({emailAddress:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.forgetfunction=function(){e.props.history.push("/forgetpassword")},e.validate=function(t){var a="",n="";return C.test(e.state.emailAddress)||(a="*Enter proper Username"),F.test(e.state.password)||(n="*Enter proper Password"),!a&&!n||(e.setState({usernameError:a,passwordError:n}),!1)},e.handleSubmit=function(t){t.preventDefault(),e.validate()&&e.props.history.push("/home")},e.validate=e.validate.bind(Object(E.a)(e)),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"containerlogin"},r.a.createElement("div",{className:"imagebox"},r.a.createElement("img",{className:"cofeeimg",src:"/images/login1.jpg",alt:"img not found"})),r.a.createElement("div",{className:"imagebox"},r.a.createElement("div",{className:"center"},r.a.createElement("br",null),r.a.createElement("h1",null,"Log In"),r.a.createElement("form",{method:"post"},r.a.createElement("div",{className:"txt_field"},r.a.createElement("input",{type:"text ",onChange:function(t){return e.handleUserName(t)},value:this.state.emailAddress,required:!0}),r.a.createElement("span",null),r.a.createElement("label",null,"Username")),r.a.createElement("div",{className:"errormsg"},this.state.usernameError),r.a.createElement("div",{className:"txt_field"},r.a.createElement("input",{type:"password",onChange:function(t){return e.handlePassword(t)},value:this.state.password,required:!0}),r.a.createElement("span",null),r.a.createElement("label",null,"Password")),r.a.createElement("div",{className:"errormsg"},this.state.passwordError),r.a.createElement("div",{className:"pass",onClick:this.forgetfunction},"Forget Password?"),r.a.createElement("input",{type:"submit",onClick:this.handleSubmit,value:"Login"})),r.a.createElement("br",null),r.a.createElement("div",null))))))}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("footer",null,r.a.createElement("p",{style:{textAlign:"center"}},"Copyright \xa9 2020 Slope Rate Tech Private Limited - All Rights Reserved."," ")))}}]),a}(n.Component),z=(a(54),a(33)),B=a.n(z),P=a(34),R=a.n(P),q=new RegExp(/^[\w-+]+(\.[\w]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={EmailAddress:"",EmailError:""},e.handleEmail=function(t){e.setState({EmailAddress:t.target.value})},e.validate=function(t){var a="";return q.test(e.state.EmailAddress)||(a="*Enter proper EmailAddress"),!a||(e.setState({EmailError:a}),!1)},e.handleSubmit=function(t){if(t.preventDefault(),e.validate()){var a={EmailAddress:e.state.EmailAddress};B.a.post("https://cors-anywhere.herokuapp.com/http://localhost:8080/web/forgetpassword",R.a.stringify({email:a})).then((function(t){console.log(t.data),"user not found"===t.data&&(alert("your password is sent to your mail please check to login"),e.props.history.push("/login"))})).catch((function(e){console.log(e)}))}},e.validate=e.validate.bind(Object(E.a)(e)),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"forgetpassword"},r.a.createElement("h1",null,"Please Enter Your Email We Will Send A Temperary Password To Your Mail"),r.a.createElement("div",{className:"forgetform"},r.a.createElement("form",{action:"/action_page.php"},r.a.createElement("label",{htmlFor:"fname"},"Email Address"),r.a.createElement("input",{type:"text",id:"fname",name:"firstname",onChange:function(t){return e.handleEmail(t)},value:this.state.EmailAddress,placeholder:"Your email.."}),r.a.createElement("div",null,this.state.EmailError),r.a.createElement("input",{type:"submit",onClick:this.handleSubmit,value:"Submit"})))))}}]),a}(n.Component);var M=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(d,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/home",exact:!0,strict:!0,component:N}),r.a.createElement(y.a,{path:"/services",exact:!0,strict:!0,component:x}),r.a.createElement(y.a,{path:"/aboutus",exact:!0,strict:!0,component:O}),r.a.createElement(y.a,{path:"/contactus",exact:!0,strict:!0,component:j}),r.a.createElement(y.a,{path:"/login",exact:!0,strict:!0,component:I}),r.a.createElement(y.a,{path:"/signup",exact:!0,strict:!0,component:w}),r.a.createElement(y.a,{path:"/forgetpassword",exact:!0,strict:!0,component:L}))),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.4b1297e8.chunk.js.map