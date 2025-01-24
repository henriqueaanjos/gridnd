var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && m(o, r, e[r]);
  if (i)
    for (var r of i(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, t = (o, e) => s(o, f(e));
import l, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PersonSimpleTaiChi.mjs";
const C = h((o, e) => /* @__PURE__ */ l.createElement(d, t(a({ ref: e }, o), { weights: w })));
C.displayName = "PersonSimpleTaiChi";
export {
  C as PersonSimpleTaiChi
};
