var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      R.call(e, t) && m(o, t, e[t]);
  return o;
}, g = (o, e) => f(o, p(e));
import l, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import d from "../defs/ToggleRight.mjs";
const n = c((o, e) => /* @__PURE__ */ l.createElement(h, g(a({ ref: e }, o), { weights: d })));
n.displayName = "ToggleRight";
export {
  n as ToggleRight
};
