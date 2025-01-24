var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      n.call(r, e) && m(o, e, r[e]);
  return o;
}, c = (o, r) => i(o, p(r));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Anchor.mjs";
const w = R((o, r) => /* @__PURE__ */ h.createElement(d, c(a({ ref: r }, o), { weights: l })));
w.displayName = "Anchor";
export {
  w as Anchor
};
