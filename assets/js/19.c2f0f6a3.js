(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{205:function(t,i,s){"use strict";s.r(i);var e=s(0),l=Object(e.a)({},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"this指向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this指向","aria-hidden":"true"}},[t._v("#")]),t._v(" this指向")]),t._v(" "),s("ol",[s("li",[t._v("事实上，调用函数会创建新的属于函数自身的执行上下文。执行上下文的调用创建阶段会决定 this的指向。到此，我们可以得出的一个结论：this 的指向，是在调用函数时根据执行上下文所动态确定的。")])]),t._v(" "),s("p",[t._v("具体环节和规则，可以先“死记硬背”以下几条规律，后面再慢慢一一分析：")]),t._v(" "),s("ul",[s("li",[t._v("在函数体中，简单调用该函数时（非显式/隐式绑定下），严格模式下 this 绑定到 undefined，否则绑定到全局对象 window／ 。     global；")]),t._v(" "),s("li",[t._v("2.一般构造函数 new 调用，绑定到新创建的对象上（如果构造函数中显式返回一个值，且返回的是一个对象，那么 this 就指向这个返回的对象；如果返回的不是一个对象，那么 this 仍然指向实例。）；")]),t._v(" "),s("li",[t._v("一般由 call/apply/bind 方法显式调用，绑定到指定参数的对象上；")]),t._v(" "),s("li",[t._v("一般由上下文对象调用，绑定在该对象上；")]),t._v(" "),s("li",[t._v("箭头函数中，根据外层上下文绑定的 this 决定 this 指向。（箭头函数使用 this 不适用以上标准规则，而是根据外层（函数或者全局）上下文来决定。）")]),t._v(" "),s("li",[t._v("定时器（setTimeout.setInterval）绑定，指向window")])])])},[],!1,null,null,null);i.default=l.exports}}]);