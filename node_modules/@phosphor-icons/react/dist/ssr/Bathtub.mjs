var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      h.call(t, r) && o(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import B, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Bathtub.mjs";
const l = R((e, t) => /* @__PURE__ */ B.createElement(b, f(m({ ref: t }, e), { weights: d })));
l.displayName = "Bathtub";
export {
  l as Bathtub
};
