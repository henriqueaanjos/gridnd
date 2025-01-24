var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      c.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, n(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import G from "../defs/Grains.mjs";
const I = l((e, r) => /* @__PURE__ */ d.createElement(w, i(m({ ref: r }, e), { weights: G })));
I.displayName = "Grains";
export {
  I as Grains
};
