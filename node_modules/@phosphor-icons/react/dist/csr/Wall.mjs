var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, l = (o, e) => i(o, p(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Wall.mjs";
const R = d((o, e) => /* @__PURE__ */ n.createElement(w, l(m({ ref: e }, o), { weights: I })));
R.displayName = "Wall";
export {
  R as Wall
};
