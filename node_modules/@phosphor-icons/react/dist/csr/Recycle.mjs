var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && c(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && c(o, r, e[r]);
  return o;
}, a = (o, e) => i(o, p(e));
import R, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/Recycle.mjs";
const w = n((o, e) => /* @__PURE__ */ R.createElement(y, a(m({ ref: e }, o), { weights: d })));
w.displayName = "Recycle";
export {
  w as Recycle
};
