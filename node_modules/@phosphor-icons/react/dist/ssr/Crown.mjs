var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    n.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      w.call(r, e) && m(o, e, r[e]);
  return o;
}, f = (o, r) => p(o, s(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Crown.mjs";
const C = R((o, r) => /* @__PURE__ */ c.createElement(d, f(a({ ref: r }, o), { weights: l })));
C.displayName = "Crown";
export {
  C as Crown
};
