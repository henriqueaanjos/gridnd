var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? n(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      s.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => c(t, f(o));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Function.mjs";
const F = l((t, o) => /* @__PURE__ */ d.createElement(u, i(a({ ref: o }, t), { weights: w })));
F.displayName = "Function";
export {
  F as Function
};
