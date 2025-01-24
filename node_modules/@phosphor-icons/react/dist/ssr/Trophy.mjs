var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      h.call(r, e) && m(o, e, r[e]);
  return o;
}, p = (o, r) => i(o, s(r));
import y, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Trophy.mjs";
const n = R((o, r) => /* @__PURE__ */ y.createElement(d, p(a({ ref: r }, o), { weights: l })));
n.displayName = "Trophy";
export {
  n as Trophy
};
