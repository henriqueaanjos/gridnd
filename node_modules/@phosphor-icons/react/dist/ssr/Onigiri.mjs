var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (i, r, e) => r in i ? f(i, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[r] = e, m = (i, r) => {
  for (var e in r || (r = {}))
    n.call(r, e) && t(i, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && t(i, e, r[e]);
  return i;
}, a = (i, r) => p(i, s(r));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Onigiri.mjs";
const w = R((i, r) => /* @__PURE__ */ g.createElement(d, a(m({ ref: r }, i), { weights: l })));
w.displayName = "Onigiri";
export {
  w as Onigiri
};
