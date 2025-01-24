var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => n(o, p(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import D from "../defs/Dna.mjs";
const I = l((o, e) => /* @__PURE__ */ d.createElement(w, f(m({ ref: e }, o), { weights: D })));
I.displayName = "Dna";
export {
  I as Dna
};
