var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      n.call(o, r) && t(e, r, o[r]);
  return e;
}, l = (e, o) => i(e, p(o));
import c, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Balloon.mjs";
const w = B((e, o) => /* @__PURE__ */ c.createElement(R, l(m({ ref: o }, e), { weights: d })));
w.displayName = "Balloon";
export {
  w as Balloon
};
