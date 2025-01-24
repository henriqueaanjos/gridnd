var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (t, e, r) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, o = (t, e) => {
  for (var r in e || (e = {}))
    R.call(e, r) && i(t, r, e[r]);
  if (a)
    for (var r of a(e))
      d.call(e, r) && i(t, r, e[r]);
  return t;
}, m = (t, e) => f(t, s(e));
import n, { forwardRef as w } from "react";
import S from "../lib/SSRBase.mjs";
import c from "../defs/HandSwipeRight.mjs";
const g = w((t, e) => /* @__PURE__ */ n.createElement(S, m(o({ ref: e }, t), { weights: c })));
g.displayName = "HandSwipeRight";
export {
  g as HandSwipeRight
};
