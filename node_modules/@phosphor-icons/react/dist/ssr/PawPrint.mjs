var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    n.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      w.call(r, e) && o(t, e, r[e]);
  return t;
}, i = (t, r) => p(t, s(r));
import P, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PawPrint.mjs";
const l = c((t, r) => /* @__PURE__ */ P.createElement(R, i(m({ ref: r }, t), { weights: d })));
l.displayName = "PawPrint";
export {
  l as PawPrint
};
