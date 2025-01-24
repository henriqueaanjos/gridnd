var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      d.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/Hoodie.mjs";
const I = l((e, o) => /* @__PURE__ */ n.createElement(w, i(a({ ref: o }, e), { weights: H })));
I.displayName = "Hoodie";
export {
  I as Hoodie
};
