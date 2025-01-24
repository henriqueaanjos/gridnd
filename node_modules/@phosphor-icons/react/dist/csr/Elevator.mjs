var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && a(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import n, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/Elevator.mjs";
const w = E((o, e) => /* @__PURE__ */ n.createElement(d, f(m({ ref: e }, o), { weights: v })));
w.displayName = "Elevator";
export {
  w as Elevator
};
