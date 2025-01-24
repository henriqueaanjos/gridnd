var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    w.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Cow.mjs";
const C = d((e, o) => /* @__PURE__ */ R.createElement(l, f(a({ ref: o }, e), { weights: n })));
C.displayName = "Cow";
export {
  C as Cow
};
