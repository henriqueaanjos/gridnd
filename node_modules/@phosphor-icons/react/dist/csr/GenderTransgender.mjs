var s = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var n = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    i.call(e, o) && n(r, o, e[o]);
  if (a)
    for (var o of a(e))
      p.call(e, o) && n(r, o, e[o]);
  return r;
}, m = (r, e) => d(r, f(e));
import c, { forwardRef as g } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/GenderTransgender.mjs";
const G = g((r, e) => /* @__PURE__ */ c.createElement(l, m(t({ ref: e }, r), { weights: w })));
G.displayName = "GenderTransgender";
export {
  G as GenderTransgender
};
