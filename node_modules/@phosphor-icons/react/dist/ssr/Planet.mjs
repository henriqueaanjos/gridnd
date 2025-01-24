var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && o(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/Planet.mjs";
const P = R((t, e) => /* @__PURE__ */ c.createElement(d, f(m({ ref: e }, t), { weights: w })));
P.displayName = "Planet";
export {
  P as Planet
};
