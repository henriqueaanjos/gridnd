var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (i, e, t) => e in i ? p(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, r = (i, e) => {
  for (var t in e || (e = {}))
    g.call(e, t) && o(i, t, e[t]);
  if (m)
    for (var t of m(e))
      n.call(e, t) && o(i, t, e[t]);
  return i;
}, a = (i, e) => l(i, f(e));
import s, { forwardRef as c } from "react";
import R from "../lib/IconBase.mjs";
import h from "../defs/AlignRightSimple.mjs";
const d = c((i, e) => /* @__PURE__ */ s.createElement(R, a(r({ ref: e }, i), { weights: h })));
d.displayName = "AlignRightSimple";
export {
  d as AlignRightSimple
};
