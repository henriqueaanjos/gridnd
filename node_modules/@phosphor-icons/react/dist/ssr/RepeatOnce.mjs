var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      R.call(e, r) && o(t, r, e[r]);
  return t;
}, p = (t, e) => f(t, i(e));
import n, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/RepeatOnce.mjs";
const O = d((t, e) => /* @__PURE__ */ n.createElement(l, p(m({ ref: e }, t), { weights: w })));
O.displayName = "RepeatOnce";
export {
  O as RepeatOnce
};
