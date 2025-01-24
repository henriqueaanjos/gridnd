var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      R.call(e, a) && t(r, a, e[a]);
  return r;
}, c = (r, e) => i(r, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Peace.mjs";
const P = l((r, e) => /* @__PURE__ */ d.createElement(n, c(m({ ref: e }, r), { weights: w })));
P.displayName = "Peace";
export {
  P as Peace
};
