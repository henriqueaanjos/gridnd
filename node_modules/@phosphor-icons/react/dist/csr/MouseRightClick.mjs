var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && i(o, t, e[t]);
  if (r)
    for (var t of r(e))
      l.call(e, t) && i(o, t, e[t]);
  return o;
}, a = (o, e) => c(o, f(e));
import R, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/MouseRightClick.mjs";
const d = g((o, e) => /* @__PURE__ */ R.createElement(h, a(m({ ref: e }, o), { weights: n })));
d.displayName = "MouseRightClick";
export {
  d as MouseRightClick
};
