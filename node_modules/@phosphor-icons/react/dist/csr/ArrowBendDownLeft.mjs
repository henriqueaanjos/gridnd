var n = Object.defineProperty, w = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => w(o, i(e));
import c, { forwardRef as d } from "react";
import B from "../lib/IconBase.mjs";
import l from "../defs/ArrowBendDownLeft.mjs";
const A = d((o, e) => /* @__PURE__ */ c.createElement(B, f(a({ ref: e }, o), { weights: l })));
A.displayName = "ArrowBendDownLeft";
export {
  A as ArrowBendDownLeft
};
