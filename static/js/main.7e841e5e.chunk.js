(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var o=c(4),n=c.n(o),s=c(7),a=c(5),r=c(6),d=c(9),i=c(8),l=c(1),u=c.n(l),b=(c(14),c(2)),j=c.n(b),h=c(0),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(e){Object(d.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:[]},e.clearActivator=!1,e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.removeGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.getGoods=function(){return e.stringCreator()},e.stringCreator=function(){var t,c=e.state.selectedGoods;if(1===c.length)t="".concat(c[0]," is selected");else{var o=c.slice(0,c.length-1);t="".concat(o.join(", ")," and ").concat(c[c.length-1]," are selected")}return t},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"title",children:"Selected goods:"}),Object(h.jsxs)("div",{className:"container",children:[0===t.length?Object(h.jsx)("div",{children:"No goods selected"}):Object(h.jsx)("div",{className:"selected-good",children:this.getGoods()}),Object(h.jsx)("button",{type:"button",className:j()("clear-button",{"clear-button--active":t.length>0}),onClick:function(){e.setState({selectedGoods:[]})},children:"X"})]}),Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsxs)("div",{className:"header-container",children:[Object(h.jsx)("div",{className:"header-goods",children:"Goods"}),Object(h.jsx)("div",{className:"header-action",children:"Action"})]}),m.map((function(t){return Object(h.jsxs)("li",{className:"list__item",children:[t,Object(h.jsx)("button",{type:"button",onClick:function(){e.clearActivator=!0,e.addGood(t)},className:j()("add-button",{"add-button--disable":e.state.selectedGoods.some((function(e){return e===t}))}),children:"Add"}),Object(h.jsx)("button",{type:"button",onClick:function(){e.removeGood(t)},className:j()("remove-button",{"remove-button--active":e.state.selectedGoods.some((function(e){return e===t}))}),children:"Remove"})]},t)}))]})]})}}]),c}(u.a.Component);n.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7e841e5e.chunk.js.map