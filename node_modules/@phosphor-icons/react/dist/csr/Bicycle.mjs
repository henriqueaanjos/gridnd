var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && c(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && c(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, p(e));
import n, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/Bicycle.mjs";
const w = y((o, e) => /* @__PURE__ */ n.createElement(B, a(m({ ref: e }, o), { weights: d })));
w.displayName = "Bicycle";
export {
  w as Bicycle
};
