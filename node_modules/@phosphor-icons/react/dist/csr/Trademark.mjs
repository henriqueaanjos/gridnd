var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, t = (e, r) => {
  for (var a in r || (r = {}))
    c.call(r, a) && o(e, a, r[a]);
  if (m)
    for (var a of m(r))
      d.call(r, a) && o(e, a, r[a]);
  return e;
}, f = (e, r) => p(e, s(r));
import n, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Trademark.mjs";
const I = k((e, r) => /* @__PURE__ */ n.createElement(l, f(t({ ref: r }, e), { weights: w })));
I.displayName = "Trademark";
export {
  I as Trademark
};
