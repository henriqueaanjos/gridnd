var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    w.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      c.call(r, e) && m(o, e, r[e]);
  return o;
}, p = (o, r) => i(o, s(r));
import x, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BoxArrowUp.mjs";
const l = B((o, r) => /* @__PURE__ */ x.createElement(R, p(a({ ref: r }, o), { weights: d })));
l.displayName = "BoxArrowUp";
export {
  l as BoxArrowUp
};
