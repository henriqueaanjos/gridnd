var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, a = (t, r) => {
  for (var e in r || (r = {}))
    S.call(r, e) && m(t, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && m(t, e, r[e]);
  return t;
}, i = (t, r) => p(t, s(r));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/TShirt.mjs";
const n = R((t, r) => /* @__PURE__ */ h.createElement(d, i(a({ ref: r }, t), { weights: l })));
n.displayName = "TShirt";
export {
  n as TShirt
};
