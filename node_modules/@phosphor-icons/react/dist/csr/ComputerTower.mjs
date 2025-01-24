var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      w.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => i(o, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/ComputerTower.mjs";
const C = d((o, e) => /* @__PURE__ */ n.createElement(l, p(a({ ref: e }, o), { weights: u })));
C.displayName = "ComputerTower";
export {
  C as ComputerTower
};
