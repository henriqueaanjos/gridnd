var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/PauseCircle.mjs";
const C = d((r, e) => /* @__PURE__ */ n.createElement(u, i(m({ ref: e }, r), { weights: w })));
C.displayName = "PauseCircle";
export {
  C as PauseCircle
};
