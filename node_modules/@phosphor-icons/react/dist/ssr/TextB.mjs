var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    x.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      B.call(e, r) && a(t, r, e[r]);
  return t;
}, s = (t, e) => i(t, p(e));
import c, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import R from "../defs/TextB.mjs";
const T = d((t, e) => /* @__PURE__ */ c.createElement(l, s(m({ ref: e }, t), { weights: R })));
T.displayName = "TextB";
export {
  T as TextB,
  T as TextBolder
};
