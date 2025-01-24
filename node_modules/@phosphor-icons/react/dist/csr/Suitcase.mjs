var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && a(t, o, e[o]);
  return t;
}, i = (t, e) => c(t, f(e));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Suitcase.mjs";
const I = l((t, e) => /* @__PURE__ */ d.createElement(u, i(m({ ref: e }, t), { weights: w })));
I.displayName = "Suitcase";
export {
  I as Suitcase
};
