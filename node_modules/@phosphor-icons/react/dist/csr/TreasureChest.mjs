var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, s = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      h.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => i(r, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/TreasureChest.mjs";
const w = d((r, e) => /* @__PURE__ */ n.createElement(l, m(s({ ref: e }, r), { weights: u })));
w.displayName = "TreasureChest";
export {
  w as TreasureChest
};
