var n = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      p.call(e, o) && m(t, o, e[o]);
  return t;
}, i = (t, e) => s(t, c(e));
import I, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Intersection.mjs";
const R = d((t, e) => /* @__PURE__ */ I.createElement(l, i(a({ ref: e }, t), { weights: w })));
R.displayName = "Intersection";
export {
  R as Intersection
};
