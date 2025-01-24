var l = Object.defineProperty, p = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(r, t, e[t]);
  if (i)
    for (var t of i(e))
      f.call(e, t) && m(r, t, e[t]);
  return r;
}, o = (r, e) => p(r, n(e));
import s, { forwardRef as S } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/AlignCenterVerticalSimple.mjs";
const d = S((r, e) => /* @__PURE__ */ s.createElement(g, o(a({ ref: e }, r), { weights: R })));
d.displayName = "AlignCenterVerticalSimple";
export {
  d as AlignCenterVerticalSimple
};
