var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      d.call(r, o) && t(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, p(r));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Cards.mjs";
const I = l((e, r) => /* @__PURE__ */ n.createElement(w, s(m({ ref: r }, e), { weights: C })));
I.displayName = "Cards";
export {
  I as Cards
};
