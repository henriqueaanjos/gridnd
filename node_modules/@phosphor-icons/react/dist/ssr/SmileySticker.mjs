var S = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? S(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && i(r, t, e[t]);
  if (m)
    for (var t of m(e))
      s.call(e, t) && i(r, t, e[t]);
  return r;
}, a = (r, e) => c(r, f(e));
import l, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SmileySticker.mjs";
const k = y((r, e) => /* @__PURE__ */ l.createElement(R, a(o({ ref: e }, r), { weights: d })));
k.displayName = "SmileySticker";
export {
  k as SmileySticker
};
