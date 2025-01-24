var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      s.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => f(o, n(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Selection.mjs";
const R = d((o, e) => /* @__PURE__ */ l.createElement(w, i(a({ ref: e }, o), { weights: I })));
R.displayName = "Selection";
export {
  R as Selection
};
