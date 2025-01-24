var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      n.call(e, r) && t(a, r, e[r]);
  return a;
}, s = (a, e) => i(a, p(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import k from "../defs/Handshake.mjs";
const l = h((a, e) => /* @__PURE__ */ c.createElement(R, s(m({ ref: e }, a), { weights: k })));
l.displayName = "Handshake";
export {
  l as Handshake
};
