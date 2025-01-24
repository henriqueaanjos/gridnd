var l = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && i(r, t, e[t]);
  if (a)
    for (var t of a(e))
      p.call(e, t) && i(r, t, e[t]);
  return r;
}, m = (r, e) => n(r, c(e));
import s, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/AlignCenterVertical.mjs";
const w = g((r, e) => /* @__PURE__ */ s.createElement(R, m(o({ ref: e }, r), { weights: d })));
w.displayName = "AlignCenterVertical";
export {
  w as AlignCenterVertical
};
