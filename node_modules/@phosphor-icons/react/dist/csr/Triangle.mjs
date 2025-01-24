var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => n(r, p(e));
import l, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Triangle.mjs";
const I = g((r, e) => /* @__PURE__ */ l.createElement(d, i(m({ ref: e }, r), { weights: w })));
I.displayName = "Triangle";
export {
  I as Triangle
};
