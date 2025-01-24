var n = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, r, t) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, m = (e, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && i(e, t, r[t]);
  if (o)
    for (var t of o(r))
      c.call(r, t) && i(e, t, r[t]);
  return e;
}, a = (e, r) => p(e, f(r));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Fingerprint.mjs";
const F = d((e, r) => /* @__PURE__ */ g.createElement(l, a(m({ ref: r }, e), { weights: w })));
F.displayName = "Fingerprint";
export {
  F as Fingerprint
};
