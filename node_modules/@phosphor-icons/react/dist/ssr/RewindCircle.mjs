var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    s.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      R.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => f(r, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/RewindCircle.mjs";
const C = l((r, e) => /* @__PURE__ */ d.createElement(n, a(m({ ref: e }, r), { weights: w })));
C.displayName = "RewindCircle";
export {
  C as RewindCircle
};
