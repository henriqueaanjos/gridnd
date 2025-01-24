var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && o(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/Headlights.mjs";
const n = g((t, e) => /* @__PURE__ */ c.createElement(h, i(m({ ref: e }, t), { weights: R })));
n.displayName = "Headlights";
export {
  n as Headlights
};
