var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    p.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      l.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => c(r, f(e));
import n, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import u from "../defs/MinusCircle.mjs";
const w = R((r, e) => /* @__PURE__ */ n.createElement(d, a(m({ ref: e }, r), { weights: u })));
w.displayName = "MinusCircle";
export {
  w as MinusCircle
};
