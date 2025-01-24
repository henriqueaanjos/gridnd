var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      u.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => f(o, i(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CubeFocus.mjs";
const n = b((o, e) => /* @__PURE__ */ R.createElement(d, s(a({ ref: e }, o), { weights: l })));
n.displayName = "CubeFocus";
export {
  n as CubeFocus
};
