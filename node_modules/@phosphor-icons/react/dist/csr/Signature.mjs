var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && a(r, t, e[t]);
  return r;
}, i = (r, e) => n(r, p(e));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/Signature.mjs";
const w = d((r, e) => /* @__PURE__ */ g.createElement(l, i(m({ ref: e }, r), { weights: u })));
w.displayName = "Signature";
export {
  w as Signature
};
