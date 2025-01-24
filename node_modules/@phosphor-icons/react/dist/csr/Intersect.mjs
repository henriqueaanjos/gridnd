var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      p.call(e, r) && m(t, r, e[r]);
  return t;
}, s = (t, e) => f(t, i(e));
import I, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Intersect.mjs";
const R = d((t, e) => /* @__PURE__ */ I.createElement(l, s(a({ ref: e }, t), { weights: w })));
R.displayName = "Intersect";
export {
  R as Intersect
};
