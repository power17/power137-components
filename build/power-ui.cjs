"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("vue"),r={type:{type:String,default:"secondary"},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1}},o=n.defineComponent({name:"SButton",props:r,setup(e,{slots:t}){const{type:s,size:l,disabled:a,block:u}=n.toRefs(e),d=u.value?"s-btn--block":"";return()=>n.createVNode("button",{disabled:a.value,class:`s-btn s-btn--${s.value} s-btn--${l.value} ${d}`},[t.default?t.default():"按钮"])}}),c={install(e){e.component(o.name,o)}},i=[c],b={version:"0.1.1",install(e){i.forEach(t=>e.use(t))}};exports.Button=o;exports.default=b;
