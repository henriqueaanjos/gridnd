var l = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(r, t, e[t]);
  if (i)
    for (var t of i(e))
      f.call(e, t) && m(r, t, e[t]);
  return r;
}, a = (r, e) => n(r, p(e));
import s, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/AlignCenterVerticalSimple.mjs";
const A = g((r, e) => /* @__PURE__ */ s.createElement(d, a(o({ ref: e }, r), { weights: w })));
A.displayName = "AlignCenterVerticalSimple";
export {
  A as AlignCenterVerticalSimple
};
