var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Palette.mjs";
const P = d((t, e) => /* @__PURE__ */ R.createElement(n, f(m({ ref: e }, t), { weights: w })));
P.displayName = "Palette";
export {
  P as Palette
};
