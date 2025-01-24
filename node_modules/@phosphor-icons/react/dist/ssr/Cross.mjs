var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && t(o, e, r[e]);
  if (s)
    for (var e of s(r))
      R.call(r, e) && t(o, e, r[e]);
  return o;
}, a = (o, r) => i(o, p(r));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Cross.mjs";
const C = l((o, r) => /* @__PURE__ */ d.createElement(n, a(m({ ref: r }, o), { weights: w })));
C.displayName = "Cross";
export {
  C as Cross
};
