var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      l.call(r, e) && t(o, e, r[e]);
  return o;
}, i = (o, r) => f(o, p(r));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import w from "../defs/FadersHorizontal.mjs";
const z = c((o, r) => /* @__PURE__ */ n.createElement(R, i(m({ ref: r }, o), { weights: w })));
z.displayName = "FadersHorizontal";
export {
  z as FadersHorizontal
};
