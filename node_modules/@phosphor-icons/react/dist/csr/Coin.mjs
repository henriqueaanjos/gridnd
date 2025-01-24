var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => n(e, p(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Coin.mjs";
const I = l((e, o) => /* @__PURE__ */ d.createElement(w, i(a({ ref: o }, e), { weights: C })));
I.displayName = "Coin";
export {
  I as Coin
};
