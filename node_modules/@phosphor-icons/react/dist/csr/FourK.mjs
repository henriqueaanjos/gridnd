var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      n.call(o, e) && m(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/FourK.mjs";
const F = l((r, o) => /* @__PURE__ */ d.createElement(u, f(a({ ref: o }, r), { weights: w })));
F.displayName = "FourK";
export {
  F as FourK
};
