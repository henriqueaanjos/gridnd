var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, i) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, a = (r, e) => {
  for (var i in e || (e = {}))
    l.call(e, i) && m(r, i, e[i]);
  if (o)
    for (var i of o(e))
      n.call(e, i) && m(r, i, e[i]);
  return r;
}, t = (r, e) => s(r, f(e));
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/PersonSimpleTaiChi.mjs";
const d = c((r, e) => /* @__PURE__ */ S.createElement(h, t(a({ ref: e }, r), { weights: R })));
d.displayName = "PersonSimpleTaiChi";
export {
  d as PersonSimpleTaiChi
};
