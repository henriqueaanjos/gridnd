var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, n(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import R from "../defs/ArrowBendDoubleUpRight.mjs";
const g = l((o, e) => /* @__PURE__ */ d.createElement(w, i(a({ ref: e }, o), { weights: R })));
g.displayName = "ArrowBendDoubleUpRight";
export {
  g as ArrowBendDoubleUpRight
};
