var i = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      n.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => s(r, c(e));
import B, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Briefcase.mjs";
const I = d((r, e) => /* @__PURE__ */ B.createElement(l, f(m({ ref: e }, r), { weights: w })));
I.displayName = "Briefcase";
export {
  I as Briefcase
};
