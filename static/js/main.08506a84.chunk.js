(this.webpackJsonprestaurantchain=this.webpackJsonprestaurantchain||[]).push([[0],{27:function(e,t,a){},33:function(e,t,a){e.exports=a(70)},38:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o),l=a(1),c=a(2),i=a(4),u=a(3),m=a(10),d=(a(38),a(6)),p=a.n(d),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),p()({method:"post",url:"https://protected-brook-06093.herokuapp.com/authenticate",data:{username:n.state.username,password:n.state.password}}).then((function(e){var t=e.data.jwt;localStorage.setItem("jwt",t),n.props.history.push("/dashboard")})).catch((function(e){console.log(e)}))},n.state={username:void 0,password:void 0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("div",{className:"bg"}),r.a.createElement("form",{id:"login-form",method:"post",onSubmit:this.submitHandler},r.a.createElement("input",{className:"username",type:"text",name:"username",placeholder:"Username",required:!0,value:t,onChange:this.changeHandler}),r.a.createElement("input",{className:"password",type:"password",name:"password",placeholder:"Password",required:!0,value:a,onChange:this.changeHandler}),r.a.createElement("button",{className:"Login",type:"submit"},"Login"),r.a.createElement("label",{className:"form-switch"},r.a.createElement("span",null,"| Forgot password"))))}}]),a}(n.Component),g=(a(56),a(27),localStorage.getItem("jwt")),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.toggle=function(){n.setState({status:!n.state.status})},n.togglePasswordForm=function(){n.setState({passwordFormStatus:!n.state.passwordFormStatus})},n.toggleDarkmode=function(){n.setState({darkmodeFormStatus:!n.state.darkmodeFormStatus})},n.logout=function(){localStorage.clear(),window.location.href="https://kornito.github.io/Restoranu-administravimo-programa/"},n.submitPasswordChange=function(e){e.preventDefault(),p()({method:"patch",url:"https://protected-brook-06093.herokuapp.com/changePassword",headers:{Authorization:"Bearer "+g,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:{oldPassword:n.state.oldPassword,newPassword:n.state.newPassword}}).then((function(e){alert(JSON.stringify(e.data))})).catch((function(e){400===e.response.status?alert("Incorrect password"):500===e.response.status?alert("Server error"):alert(e)}))},n.state={posts:[],status:!1,passwordFormStatus:!1,darkmodeFormStatus:!1,oldPassword:void 0,newPassword:void 0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;p()({url:"https://protected-brook-06093.herokuapp.com/getUserData",method:"get",headers:{Authorization:"Bearer "+g,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(t){e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts,t=this.state,a=t.oldPassword,n=t.newPassword;return r.a.createElement("div",null,r.a.createElement("img",{id:"user-image","data-testid":"user-avatar-image",src:"https://image.flaticon.com/icons/svg/72/72905.svg",alt:"Avatar logo",onClick:this.toggle}),e.length?e.map((function(e){return r.a.createElement("h2",{id:"username","data-testid":"user-avatar-username"},"Welcome, ",e.name)})):null,this.state.status&&r.a.createElement("div",{id:"settings-menu"},r.a.createElement("ul",null,r.a.createElement("a",null,r.a.createElement("li",{id:"menu-settings",onClick:this.togglePasswordForm}," ",r.a.createElement("span",null,"\u2699\ufe0f")," Change password")),r.a.createElement("a",null,r.a.createElement("li",{id:"dark-mode",onClick:this.toggleDarkmode}," ",r.a.createElement("span",null,"\ud83c\udf1b")," Blue light filter")),r.a.createElement("a",null,r.a.createElement("li",{id:"menu-logout",onClick:this.logout}," ",r.a.createElement("span",null,"\ud83d\udddd\ufe0f")," Log out")))),this.state.darkmodeFormStatus&&r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("div",{className:"darkmode"}))),this.state.passwordFormStatus&&r.a.createElement("div",null,r.a.createElement("form",{id:"change-password-form",method:"patch",onSubmit:this.submitPasswordChange},r.a.createElement("button",{class:"Exit-btn",onClick:this.togglePasswordForm},"X"),r.a.createElement("ul",null,r.a.createElement("div",{className:".input-container"},r.a.createElement("input",{className:"input-container",placeholder:"Old Password",name:"oldPassword",value:a,onChange:this.changeHandler}),r.a.createElement("label",{id:"label"},"OLD")),r.a.createElement("div",{className:".input-container"},r.a.createElement("input",{className:"input-container",placeholder:"New Password",name:"newPassword",value:n,onChange:this.changeHandler}),r.a.createElement("label",{id:"label"},"NEW"))),r.a.createElement("button",{class:"btn"},"Submit"))))}}]),a}(n.Component),f=(a(57),localStorage.getItem("jwt")),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={posts:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;p()({url:"https://protected-brook-06093.herokuapp.com/getHeaderData",method:"get",headers:{Authorization:"Bearer "+f,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(t){e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts;return r.a.createElement("div",null,e.length?e.map((function(e){return r.a.createElement("div",{className:"restaurant-logo-component"},r.a.createElement("img",{id:"restaurant-logo",alt:"Restaurant logo",src:e.logo_url}),r.a.createElement("p",{id:"restaurant-name",key:e.id},e.addressOrChain))})):null)}}]),a}(n.Component),E=(a(58),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={posts:[]},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header-component","data-testid":"header"},r.a.createElement(v,{id:"restaurant-logo"}),r.a.createElement(b,{id:"user-avatar"}))}}]),a}(n.Component)),w=(a(59),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={posts:[]},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"WelcomeText"},r.a.createElement("h2",{className:"MainWelcome"},"Hi, Welcome Back!"),r.a.createElement("h2",{className:"AdminPanel"},"Your restaurant admin panel"))}}]),a}(n.Component)),j=(a(60),localStorage.getItem("jwt")),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).toggle=function(){n.setState({status:!n.state.status})},n.changeHandler=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),p()({method:"put",url:"https://protected-brook-06093.herokuapp.com/addRestaurant",headers:{Authorization:"Bearer "+j,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:{restaurantAddress:n.state.restaurantAddress}}).then((function(e){alert(JSON.stringify(e.data)),p()({url:"https://protected-brook-06093.herokuapp.com/addresses",method:"get",headers:{Authorization:"Bearer "+j,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){n.setState({posts:e.data})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},n.state={posts:[],status:!1,restaurantAddress:void 0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;p()({url:"https://protected-brook-06093.herokuapp.com/addresses",method:"get",headers:{Authorization:"Bearer "+j,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(t){e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts,t=this.state.restaurantAddress;return r.a.createElement("div",{className:"restaurant-list"},r.a.createElement("img",{className:"input-restaurant-photo",src:"https://freesvg.org/img/mono-tab-new.png",alt:"Add Restaurant",onClick:this.toggle}),this.state.status&&r.a.createElement("div",null,r.a.createElement("form",{id:"new-restaurant-form",method:"put",onSubmit:this.submitHandler},r.a.createElement("button",{class:"Exit-btn",onClick:this.toggle},"X"),r.a.createElement("ul",null,r.a.createElement("div",{className:".input-container"},r.a.createElement("input",{className:"input-container",placeholder:"Restaurant Address",name:"restaurantAddress",value:t,onChange:this.changeHandler}),r.a.createElement("label",{id:"label"},"*"))),r.a.createElement("button",{class:"btn"},"Submit"))),r.a.createElement("ul",null,e.length?e.map((function(e){return r.a.createElement("li",{key:e.id},e.address)})):null))}}]),a}(n.Component),C=(a(61),localStorage.getItem("jwt")),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).toggle=function(){n.setState({status:!n.state.status})},n.changeHandler=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),p()({method:"put",url:"https://protected-brook-06093.herokuapp.com/addDish",headers:{Authorization:"Bearer "+C,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:{name:n.state.name,price:n.state.price,img_url:n.state.img_url,ingridients:n.state.ingridients}}).then((function(e){console.log(e),p()({url:"https://protected-brook-06093.herokuapp.com/menu",method:"get",headers:{Authorization:"Bearer "+C,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){n.setState({posts:e.data})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},n.state={posts:[],status:!1,name:void 0,price:void 0,img_url:void 0,ingridients:void 0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;p()({url:"https://protected-brook-06093.herokuapp.com/menu",method:"get",headers:{Authorization:"Bearer "+C,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(t){e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts,t=this.state,a=t.name,n=t.price,o=t.img_url,s=t.ingridients;return r.a.createElement("div",{className:"dishes-component"},r.a.createElement("div",{className:"Dishes"},r.a.createElement("img",{className:"input-dishes-photo",src:"https://freesvg.org/img/mono-tab-new.png",alt:"Add Dishes",onClick:this.toggle}),this.state.status&&r.a.createElement("div",null,r.a.createElement("form",{id:"new-dish-form",method:"put",onSubmit:this.submitHandler},r.a.createElement("button",{class:"Exit-btn",onClick:this.toggle},"X"),r.a.createElement("ul",null,r.a.createElement("div",{className:".input-container"},r.a.createElement("input",{className:"input-container",placeholder:"Dish Name",name:"name",value:a,onChange:this.changeHandler}),r.a.createElement("label",{id:"label"},"*")),r.a.createElement("div",{className:".input-container"},r.a.createElement("input",{className:"input-container",placeholder:"Price",name:"price",value:n,onChange:this.changeHandler}),r.a.createElement("label",{id:"label"},"*")),r.a.createElement("div",{className:".input-container"},r.a.createElement("input",{className:"input-container",placeholder:"Image Link",name:"img_url",value:o,onChange:this.changeHandler}),r.a.createElement("label",{id:"label"},"*")),r.a.createElement("div",{className:".input-container"},r.a.createElement("input",{className:"input-container",placeholder:"Ingridients",name:"ingridients",value:s,onChange:this.changeHandler}),r.a.createElement("label",{id:"label"},"*"))),r.a.createElement("button",{class:"btn"},"Submit"))),e.length?e.map((function(e){return r.a.createElement("div",{className:"restaurant-dishes"},r.a.createElement("img",{id:"dishes_photo",alt:"Displayed Dish",src:e.img_url}),r.a.createElement("p",{id:"dishes-name",key:e.id},e.name),r.a.createElement("p",{id:"dishes-price"},"Price: ",e.price,"\u20ac"))})):null))}}]),a}(n.Component),S=(a(62),localStorage.getItem("jwt")),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),p()({method:"patch",url:"https://protected-brook-06093.herokuapp.com/changePrice",headers:{Authorization:"Bearer "+S,"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:{price:n.state.price,name:n.state.name}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},n.state={price:void 0,name:void 0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.price,a=e.name;return r.a.createElement("div",{className:"discount-applicator"},r.a.createElement("h2",{id:"discount-applicator-title"},"Change price:"),r.a.createElement("form",{method:"patch",onSubmit:this.submitHandler},r.a.createElement("input",{id:"discount-amount",type:"text",name:"price",placeholder:"New price",value:t,onChange:this.changeHandler}),r.a.createElement("input",{id:"dish-name",type:"text",name:"name",placeholder:"Dish Name",value:a,onChange:this.changeHandler}),r.a.createElement("button",{id:"submitDiscountButton",type:"submit"},"Submit")))}}]),a}(n.Component),A=(a(63),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{"data-testid":"footer"},r.a.createElement("p",null,"Copyright \xa9 2020"))}}]),a}(n.Component)),N=(a(64),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"DashboardClass"},r.a.createElement(E,{class:"HeaderClass"}),r.a.createElement(w,{class:"WelcomeText"}),r.a.createElement(O,{class:"RestaurantListClass"}),r.a.createElement(k,{class:"DishesClass"}),r.a.createElement(y,{class:"DiscountApplicatorClass"}),r.a.createElement(A,{class:"FooterClass"}))}}]),a}(n.Component)),H=a(30),D=a(12),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H.a,null,r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/Restoranu-administravimo-programa",exact:!0,component:h}),r.a.createElement(D.a,{path:"/dashboard",component:N}))))}}]),a}(n.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.08506a84.chunk.js.map