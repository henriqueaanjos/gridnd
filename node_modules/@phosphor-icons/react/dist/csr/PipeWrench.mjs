var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/PipeWrench.mjs";
const I = d((r, e) => /* @__PURE__ */ h.createElement(l, i(a({ ref: e }, r), { weights: w })));
I.displayName = "PipeWrench";
export {
  I as PipeWrench
};
