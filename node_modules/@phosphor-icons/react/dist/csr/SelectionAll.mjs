var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && l(o, t, e[t]);
  if (r)
    for (var t of r(e))
      p.call(e, t) && l(o, t, e[t]);
  return o;
}, a = (o, e) => c(o, f(e));
import s, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/SelectionAll.mjs";
const I = d((o, e) => /* @__PURE__ */ s.createElement(w, a(m({ ref: e }, o), { weights: A })));
I.displayName = "SelectionAll";
export {
  I as SelectionAll
};
