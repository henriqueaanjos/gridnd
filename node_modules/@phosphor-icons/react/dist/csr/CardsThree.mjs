var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      d.call(e, o) && t(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import h, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/CardsThree.mjs";
const C = n((r, e) => /* @__PURE__ */ h.createElement(l, s(m({ ref: e }, r), { weights: w })));
C.displayName = "CardsThree";
export {
  C as CardsThree
};
