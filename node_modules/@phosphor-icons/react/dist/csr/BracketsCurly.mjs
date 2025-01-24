var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, r, t) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, m = (e, r) => {
  for (var t in r || (r = {}))
    p.call(r, t) && a(e, t, r[t]);
  if (o)
    for (var t of o(r))
      l.call(r, t) && a(e, t, r[t]);
  return e;
}, s = (e, r) => f(e, i(r));
import n, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BracketsCurly.mjs";
const k = y((e, r) => /* @__PURE__ */ n.createElement(B, s(m({ ref: r }, e), { weights: d })));
k.displayName = "BracketsCurly";
export {
  k as BracketsCurly
};
