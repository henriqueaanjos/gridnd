var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      l.call(t, r) && m(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import n, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/Butterfly.mjs";
const u = y((e, t) => /* @__PURE__ */ n.createElement(B, f(a({ ref: t }, e), { weights: d })));
u.displayName = "Butterfly";
export {
  u as Butterfly
};
