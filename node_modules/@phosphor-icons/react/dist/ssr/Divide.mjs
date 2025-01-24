var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    d.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      c.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => p(r, s(e));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/Divide.mjs";
const w = l((r, e) => /* @__PURE__ */ R.createElement(n, a(m({ ref: e }, r), { weights: v })));
w.displayName = "Divide";
export {
  w as Divide
};
