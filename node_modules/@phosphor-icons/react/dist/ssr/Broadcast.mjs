var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var e = (a, r, o) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && e(a, o, r[o]);
  if (t)
    for (var o of t(r))
      d.call(r, o) && e(a, o, r[o]);
  return a;
}, s = (a, r) => f(a, i(r));
import B, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Broadcast.mjs";
const w = R((a, r) => /* @__PURE__ */ B.createElement(l, s(m({ ref: r }, a), { weights: n })));
w.displayName = "Broadcast";
export {
  w as Broadcast
};
