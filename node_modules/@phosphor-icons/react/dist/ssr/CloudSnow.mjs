var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import n, { forwardRef as w } from "react";
import S from "../lib/SSRBase.mjs";
import c from "../defs/CloudSnow.mjs";
const R = w((e, o) => /* @__PURE__ */ n.createElement(S, f(a({ ref: o }, e), { weights: c })));
R.displayName = "CloudSnow";
export {
  R as CloudSnow
};
