var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    c.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      R.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => f(r, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Tipi.mjs";
const S = l((r, e) => /* @__PURE__ */ d.createElement(n, a(m({ ref: e }, r), { weights: w })));
S.displayName = "Tipi";
export {
  S as Tipi
};
