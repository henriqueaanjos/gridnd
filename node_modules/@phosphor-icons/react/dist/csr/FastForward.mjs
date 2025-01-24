var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var e = (o, r, a) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a, m = (o, r) => {
  for (var a in r || (r = {}))
    c.call(r, a) && e(o, a, r[a]);
  if (t)
    for (var a of t(r))
      d.call(r, a) && e(o, a, r[a]);
  return o;
}, s = (o, r) => i(o, p(r));
import w, { forwardRef as F } from "react";
import n from "../lib/IconBase.mjs";
import l from "../defs/FastForward.mjs";
const I = F((o, r) => /* @__PURE__ */ w.createElement(n, s(m({ ref: r }, o), { weights: l })));
I.displayName = "FastForward";
export {
  I as FastForward
};
