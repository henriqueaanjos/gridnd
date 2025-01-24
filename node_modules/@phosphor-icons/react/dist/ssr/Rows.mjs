var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    R.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      w.call(o, r) && m(e, r, o[r]);
  return e;
}, s = (e, o) => i(e, p(o));
import c, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Rows.mjs";
const S = d((e, o) => /* @__PURE__ */ c.createElement(l, s(a({ ref: o }, e), { weights: n })));
S.displayName = "Rows";
export {
  S as Rows
};
