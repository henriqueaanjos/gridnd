var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => f(o, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import u from "../defs/Question.mjs";
const w = d((o, e) => /* @__PURE__ */ R.createElement(l, i(a({ ref: e }, o), { weights: u })));
w.displayName = "Question";
export {
  w as Question
};
