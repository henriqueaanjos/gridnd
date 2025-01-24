var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, i = (t, r) => {
  for (var e in r || (r = {}))
    R.call(r, e) && a(t, e, r[e]);
  if (o)
    for (var e of o(r))
      n.call(r, e) && a(t, e, r[e]);
  return t;
}, m = (t, r) => p(t, s(r));
import w, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/ArrowFatLineRight.mjs";
const d = c((t, r) => /* @__PURE__ */ w.createElement(g, m(i({ ref: r }, t), { weights: h })));
d.displayName = "ArrowFatLineRight";
export {
  d as ArrowFatLineRight
};
