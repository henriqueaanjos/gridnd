var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var i = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && i(o, t, e[t]);
  if (r)
    for (var t of r(e))
      R.call(e, t) && i(o, t, e[t]);
  return o;
}, a = (o, e) => c(o, f(e));
import l, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import d from "../defs/MouseRightClick.mjs";
const k = g((o, e) => /* @__PURE__ */ l.createElement(h, a(m({ ref: e }, o), { weights: d })));
k.displayName = "MouseRightClick";
export {
  k as MouseRightClick
};
