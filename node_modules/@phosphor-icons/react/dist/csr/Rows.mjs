var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      w.call(o, r) && m(e, r, o[r]);
  return e;
}, s = (e, o) => i(e, p(o));
import R, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Rows.mjs";
const I = n((e, o) => /* @__PURE__ */ R.createElement(d, s(a({ ref: o }, e), { weights: l })));
I.displayName = "Rows";
export {
  I as Rows
};
