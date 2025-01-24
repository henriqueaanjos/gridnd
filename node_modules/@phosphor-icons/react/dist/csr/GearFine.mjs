var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => n(r, p(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/GearFine.mjs";
const G = l((r, e) => /* @__PURE__ */ d.createElement(w, i(m({ ref: e }, r), { weights: F })));
G.displayName = "GearFine";
export {
  G as GearFine
};
