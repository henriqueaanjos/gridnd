var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      u.call(e, a) && t(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PlusSquare.mjs";
const n = c((r, e) => /* @__PURE__ */ S.createElement(R, s(m({ ref: e }, r), { weights: d })));
n.displayName = "PlusSquare";
export {
  n as PlusSquare
};
