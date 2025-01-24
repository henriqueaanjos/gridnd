var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      w.call(e, o) && a(t, o, e[o]);
  return t;
}, s = (t, e) => f(t, i(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Swatches.mjs";
const I = n((t, e) => /* @__PURE__ */ h.createElement(d, s(m({ ref: e }, t), { weights: l })));
I.displayName = "Swatches";
export {
  I as Swatches
};
