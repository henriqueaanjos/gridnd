var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    n.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      u.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, p(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/MinusSquare.mjs";
const l = c((r, e) => /* @__PURE__ */ S.createElement(R, i(m({ ref: e }, r), { weights: d })));
l.displayName = "MinusSquare";
export {
  l as MinusSquare
};
