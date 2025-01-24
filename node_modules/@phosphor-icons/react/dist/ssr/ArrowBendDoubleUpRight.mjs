var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    R.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      d.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, s(e));
import l, { forwardRef as n } from "react";
import w from "../lib/SSRBase.mjs";
import c from "../defs/ArrowBendDoubleUpRight.mjs";
const g = n((r, e) => /* @__PURE__ */ l.createElement(w, i(a({ ref: e }, r), { weights: c })));
g.displayName = "ArrowBendDoubleUpRight";
export {
  g as ArrowBendDoubleUpRight
};
