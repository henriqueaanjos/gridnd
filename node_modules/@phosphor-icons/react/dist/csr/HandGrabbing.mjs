var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? n(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      b.call(r, e) && t(a, e, r[e]);
  return a;
}, i = (a, r) => f(a, p(r));
import c, { forwardRef as d } from "react";
import g from "../lib/IconBase.mjs";
import l from "../defs/HandGrabbing.mjs";
const w = d((a, r) => /* @__PURE__ */ c.createElement(g, i(m({ ref: r }, a), { weights: l })));
w.displayName = "HandGrabbing";
export {
  w as HandGrabbing
};
