(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/f2eweek9/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05d0":function(t,e,n){t.exports=n.p+"img/Al-center.420f4516.svg"},"08a8":function(t,e,n){t.exports=n.p+"img/note2.180b961c.jpeg"},1376:function(t,e,n){t.exports=n.p+"img/Al-left.b416b995.svg"},1821:function(t,e,n){t.exports=n.p+"img/MilkCandy.083f2668.svg"},"1acf":function(t,e,n){t.exports=n.p+"img/List-1.0035449d.svg"},"1c91":function(t,e,n){t.exports=n.p+"img/Group.6bfbc877.svg"},"2a79":function(t,e,n){},"2ce9":function(t,e,n){t.exports=n.p+"img/B.732838b7.svg"},3225:function(t,e,n){t.exports=n.p+"img/CNYCandy.93a2f547.svg"},"43b5":function(t,e,n){t.exports=n.p+"img/Noodle.f8dd6844.svg"},"47d0":function(t,e,n){t.exports=n.p+"img/T.fa4a8de9.svg"},"48e6":function(t,e,n){t.exports=n.p+"img/img.26fc4fe8.svg"},"516c":function(t,e,n){t.exports=n.p+"img/form.42698a30.svg"},"52c5":function(t,e,n){t.exports=n.p+"img/List-2.5fac2392.svg"},"56cc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("div",{staticClass:"container",class:{mode:t.mode}},[t.showBasic?n("BasicBar",{on:{moon:function(e){t.mode=!t.mode}}}):n("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},change:function(e){return t.onEditorChange(e)},ready:function(e){return t.onEditReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("router-view")],1)])},o=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"basicBars",class:{moon:t.moon}},[t._m(0),i("div",{staticClass:"left"},[t._m(1),t._m(2),t._m(3),i("div",{staticClass:"modal",on:{click:t.changeStyle}},[i("img",{attrs:{src:n("9aef"),alt:""}})])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("div",{staticClass:"logo"},[t._v("N")]),n("div",{staticClass:"search"},[n("input",{attrs:{type:"text",placeholder:"Search"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"trash"},[i("img",{attrs:{src:n("ea78"),alt:""}}),i("div",{staticClass:"name"},[i("img",{attrs:{src:n("6828"),alt:""}}),i("span",[t._v("note")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"group"},[i("img",{attrs:{src:n("1c91"),alt:""}}),i("div",{staticClass:"name"},[i("img",{attrs:{src:n("6828"),alt:""}}),i("span",[t._v("group")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sort"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:n("1acf"),alt:""}})]),i("div",{staticClass:"right"},[i("img",{attrs:{src:n("52c5"),alt:""}})])])}],c={data:function(){return{moon:!1}},methods:{changeStyle:function(){this.$emit("moon",this.moon=!this.moon)}}},l=c,u=n("2877"),d=Object(u["a"])(l,a,r,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"editBar"},[i("div",{staticClass:"font"},[i("span",[t._v("Font")]),i("img",{attrs:{src:n("f330"),alt:""}})]),i("div",{staticClass:"font-size"},[i("span",[t._v("14")]),i("img",{attrs:{src:n("f330"),alt:""}})]),i("div",{staticClass:"mixin-1"},[i("div",{staticClass:"color"},[i("span"),i("img",{attrs:{src:n("f330"),alt:""}})]),i("img",{attrs:{src:n("2ce9"),alt:""}}),i("img",{attrs:{src:n("665e"),alt:""}}),i("img",{attrs:{src:n("fd42"),alt:""}}),i("img",{attrs:{src:n("47d0"),alt:""}})]),i("div",{staticClass:"mixin-2"},[i("img",{attrs:{src:n("6b08"),alt:""}}),i("img",{attrs:{src:n("b77c"),alt:""}})]),i("div",{staticClass:"mixin-3"},[i("img",{attrs:{src:n("1376"),alt:""}}),i("img",{attrs:{src:n("05d0"),alt:""}}),i("img",{attrs:{src:n("9a68"),alt:""}})]),i("div",{staticClass:"mixin-4"},[i("img",{attrs:{src:n("516c"),alt:""}}),i("img",{attrs:{src:n("764e"),alt:""}}),i("img",{attrs:{src:n("48e6"),alt:""}})])])}],m={data:function(){return{}}},v=m,h=(n("dae5"),Object(u["a"])(v,p,g,!1,null,"9f0d699a",null)),b=h.exports,_={data:function(){return{showBasic:!0,content:"",mode:!1,editorOption:!1}},components:{BasicBar:f,EditBar:b},computed:{editor:function(){return this.$refs.myTextEditor.quill}},methods:{onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){console.log("editor change!",t)},saveHtml:function(t){alert(this.content)}},watch:{"$route.path":function(t,e){this.showBasic="/Note"!==t}},created:function(){console.log("mode",this.mode)}},y=_,x=(n("cf25"),Object(u["a"])(y,s,o,!1,null,null,null)),C=x.exports,w=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},k=[],j={data:function(){return{}},created:function(){}},O=j,$=Object(u["a"])(O,E,k,!1,null,null,null),S=$.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lists"},[n("div",{staticClass:"next",on:{click:t.Note}},[t._v("Next")]),n("div",{staticClass:"daily"},[n("span",[t._v("My daily boring life")]),n("ul",t._l(t.lists,(function(t){return n("li",{key:t.id},[n("img",{attrs:{src:t.img,alt:""}})])})),0)]),n("div",{staticClass:"reading"},[n("span",[t._v("Reading club sharing")]),n("ul",t._l(t.lists.reverse().sort((function(t,e){return t-e})).slice(0,5),(function(t){return n("li",{key:t.id},[n("img",{attrs:{src:t.img,alt:""}})])})),0)])])},I=[],N={data:function(){return{lists:[{img:n("1821")},{img:n("661a")},{img:n("43b5")},{img:n("a773")},{img:n("7bcd")},{img:n("e714")},{img:n("3225")},{img:n("b8df")}]}},methods:{Note:function(){this.$router.push("/Note")}}},P=N,T=Object(u["a"])(P,B,I,!1,null,null,null),F=T.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[n("div",{staticClass:"left"},[t._m(0),n("div",{staticClass:"bottom"},[n("ul",t._l(t.lists,(function(e){return n("li",{key:e.key},[n("span",[t._v(" "+t._s(e.title)+" ")]),n("p",[t._v(" "+t._s(e.content)+" ")])])})),0)])]),t._m(1)])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("span",[t._v("Note list")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"right"},[i("div",{staticClass:"title"},[t._v("Sato Oki : Reading experience")]),i("hr"),i("div",{staticClass:"date"},[i("span",[t._v("2019 / 9 / 9")]),i("span",[t._v("Friday 14:44")])]),i("div",{staticClass:"content"},[i("div",{staticClass:"pr"},[t._v("Introduction by Sato, a brief introduction to classic works "),i("p"),t._v(" p Originally thought that this club was shared by some of Sato's designers, but the content is very easy. It uses 10 themes to connect the past design projects. It is not only the designers' own sharing, but also the cooperation review and feelings of many owners. . It is gentle and easy to read, and some of the more complicated parts are also accompanied by hand-painted instructions, which are quite cute. "),i("p"),t._v(' The span of design works is also exaggerated – from international luxury goods to traditional snacks, from exhibition space to food packaging. From the design of "! (2013)", the nedo design office has two hundred and fifty projects at the same time each year. It is mentioned in the "Design of 2016" that the firm has developed 400 projects. At the same time! '),i("p"),t._v(" Sato's addition, subtraction, multiplication and division")]),i("img",{attrs:{src:n("9d76"),alt:""}})]),i("div",{staticClass:"content reverse"},[i("div",{staticClass:"pl"},[t._v("Introduction by Sato, a brief introduction to classic works "),i("p"),t._v(" p Originally thought that this club was shared by some of Sato's designers, but the content is very easy. It uses 10 themes to connect the past design projects. It is not only the designers' own sharing, but also the cooperation review and feelings of many owners. . It is gentle and easy to read, and some of the more complicated parts are also accompanied by hand-painted instructions, which are quite cute. "),i("p"),t._v(' The span of design works is also exaggerated – from international luxury goods to traditional snacks, from exhibition space to food packaging. From the design of "! (2013)", the nedo design office has two hundred and fifty projects at the same time each year. It is mentioned in the "Design of 2016" that the firm has developed 400 projects. At the same time! '),i("p"),t._v(" Sato's addition, subtraction, multiplication and division")]),i("img",{attrs:{src:n("08a8"),alt:""}})])])}],A={data:function(){return{lists:[{title:"Daily",content:"Everything is done"},{title:"F2E Challenge",content:"W9 olive note"},{title:"Daily",content:"Everything is done"},{title:"Morden web",content:"good share"},{title:"Work record",content:"Some nonsense"},{title:"The idea pool in",content:"Banner and website"},{title:"Untitled",content:".........."}]}},methods:{}},q=A,D=(n("d02d"),Object(u["a"])(q,L,M,!1,null,"415c20ae",null)),H=D.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"paper"},[i("span",[t._v("Let's Find a paper")]),i("img",{attrs:{src:n("9c6e"),alt:""}}),i("div",{staticClass:"btn",on:{click:t.changePage}},[i("span",[t._v("+")]),i("span",[t._v("note")])])])},G=[],J={data:function(){return{mode:!1}},methods:{changePage:function(){this.$router.push("/List")}}},U=J,W=Object(u["a"])(U,R,G,!1,null,null,null),z=W.exports;i["a"].use(w["a"]);var Q=new w["a"]({routes:[{path:"/",name:"Home",component:S,children:[{path:"HomePage",name:"HomePage",component:z},{path:"List",name:"List",component:F},{path:"Note",name:"Note",component:H}]}]}),Y=n("953d"),K=n.n(Y);n("a753"),n("8096"),n("14e1");i["a"].prototype.$bus=new i["a"],i["a"].use(K.a),i["a"].config.productionTip=!1,new i["a"]({router:Q,render:function(t){return t(C)}}).$mount("#app")},"661a":function(t,e,n){t.exports=n.p+"img/Green.f4328c2a.svg"},"665e":function(t,e,n){t.exports=n.p+"img/I.5e01ba11.svg"},6828:function(t,e,n){t.exports=n.p+"img/add.66a0dfcf.svg"},"6b08":function(t,e,n){t.exports=n.p+"img/link.1640454b.svg"},"764e":function(t,e,n){t.exports=n.p+"img/list.1c3bfc06.svg"},"7bcd":function(t,e,n){t.exports=n.p+"img/Choco.9f16579d.svg"},"9a68":function(t,e,n){t.exports=n.p+"img/Al-right.826aeffa.svg"},"9aef":function(t,e,n){t.exports=n.p+"img/night.54140f97.svg"},"9c6e":function(t,e,n){t.exports=n.p+"img/Trash-1.880b2592.svg"},"9d76":function(t,e,n){t.exports=n.p+"img/note.b59e26bf.jpeg"},a773:function(t,e,n){t.exports=n.p+"img/LilAngel.95f752e4.svg"},b77c:function(t,e,n){t.exports=n.p+"img/unlink.d4f8db14.svg"},b8df:function(t,e,n){t.exports=n.p+"img/Calpis.8bf7cec7.svg"},cf25:function(t,e,n){"use strict";var i=n("56cc"),s=n.n(i);s.a},d02d:function(t,e,n){"use strict";var i=n("2a79"),s=n.n(i);s.a},dae5:function(t,e,n){"use strict";var i=n("f1b6"),s=n.n(i);s.a},e714:function(t,e,n){t.exports=n.p+"img/Stars.183e8794.svg"},ea78:function(t,e,n){t.exports=n.p+"img/Trash.ef771504.svg"},f1b6:function(t,e,n){},f330:function(t,e,n){t.exports=n.p+"img/left-arrow.1cb3e355.svg"},fd42:function(t,e,n){t.exports=n.p+"img/U.73b84143.svg"}});
//# sourceMappingURL=app.a495f0ed.js.map