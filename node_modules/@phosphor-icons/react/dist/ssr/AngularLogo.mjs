var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? g(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      l.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => i(r, p(o));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/AngularLogo.mjs";
const u = c((r, o) => /* @__PURE__ */ n.createElement(R, f(m({ ref: o }, r), { weights: d })));
u.displayName = "AngularLogo";
export {
  u as AngularLogo
};
