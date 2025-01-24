var n = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      p.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => s(o, c(e));
import d, { forwardRef as g } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/SortDescending.mjs";
const D = g((o, e) => /* @__PURE__ */ d.createElement(l, i(a({ ref: e }, o), { weights: w })));
D.displayName = "SortDescending";
export {
  D as SortDescending
};
