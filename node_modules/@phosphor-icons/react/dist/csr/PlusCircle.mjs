var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      p.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, l(e));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/PlusCircle.mjs";
const C = d((r, e) => /* @__PURE__ */ n.createElement(u, i(a({ ref: e }, r), { weights: w })));
C.displayName = "PlusCircle";
export {
  C as PlusCircle
};
