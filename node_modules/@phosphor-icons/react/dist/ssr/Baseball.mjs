var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? l(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && t(a, r, e[r]);
  return a;
}, s = (a, e) => f(a, i(e));
import B, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Baseball.mjs";
const n = R((a, e) => /* @__PURE__ */ B.createElement(b, s(m({ ref: e }, a), { weights: d })));
n.displayName = "Baseball";
export {
  n as Baseball
};
