var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/QuestionMark.mjs";
const u = d((r, e) => /* @__PURE__ */ R.createElement(k, i(m({ ref: e }, r), { weights: l })));
u.displayName = "QuestionMark";
export {
  u as QuestionMark
};
