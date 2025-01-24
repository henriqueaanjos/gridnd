var c = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    p.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      s.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => l(r, f(e));
import n, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/PencilCircle.mjs";
const C = R((r, e) => /* @__PURE__ */ n.createElement(d, a(m({ ref: e }, r), { weights: w })));
C.displayName = "PencilCircle";
export {
  C as PencilCircle
};
