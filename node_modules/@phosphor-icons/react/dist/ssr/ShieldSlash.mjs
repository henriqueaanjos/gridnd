var s = Object.defineProperty, l = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    f.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      h.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => l(r, S(e));
import p, { forwardRef as d } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/ShieldSlash.mjs";
const n = d((r, e) => /* @__PURE__ */ p.createElement(c, i(m({ ref: e }, r), { weights: R })));
n.displayName = "ShieldSlash";
export {
  n as ShieldSlash
};
