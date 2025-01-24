var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      h.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, s(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/PokerChip.mjs";
const w = d((o, e) => /* @__PURE__ */ n.createElement(k, i(a({ ref: e }, o), { weights: l })));
w.displayName = "PokerChip";
export {
  w as PokerChip
};
