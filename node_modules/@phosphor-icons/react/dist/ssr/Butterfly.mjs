var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    l.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      c.call(t, r) && m(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import y, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Butterfly.mjs";
const n = B((e, t) => /* @__PURE__ */ y.createElement(R, f(a({ ref: t }, e), { weights: d })));
n.displayName = "Butterfly";
export {
  n as Butterfly
};
