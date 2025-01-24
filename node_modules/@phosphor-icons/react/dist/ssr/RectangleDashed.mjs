var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (a, e, t) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, m = (a, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(a, t, e[t]);
  if (r)
    for (var t of r(e))
      R.call(e, t) && o(a, t, e[t]);
  return a;
}, s = (a, e) => f(a, i(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import g from "../defs/RectangleDashed.mjs";
const h = l((a, e) => /* @__PURE__ */ d.createElement(n, s(m({ ref: e }, a), { weights: g })));
h.displayName = "RectangleDashed";
export {
  h as RectangleDashed
};
