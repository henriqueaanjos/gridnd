var s = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && a(t, r, e[r]);
  return t;
}, i = (t, e) => n(t, f(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Presentation.mjs";
const P = d((t, e) => /* @__PURE__ */ R.createElement(l, i(m({ ref: e }, t), { weights: w })));
P.displayName = "Presentation";
export {
  P as Presentation
};
