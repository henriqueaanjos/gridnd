var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && a(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import w, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import N from "../defs/NetworkSlash.mjs";
const d = h((o, e) => /* @__PURE__ */ w.createElement(n, s(m({ ref: e }, o), { weights: N })));
d.displayName = "NetworkSlash";
export {
  d as NetworkSlash
};
