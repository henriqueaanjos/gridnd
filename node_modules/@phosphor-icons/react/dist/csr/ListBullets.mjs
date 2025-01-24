var i = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && s(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && s(e, o, t[o]);
  return e;
}, a = (e, t) => l(e, f(t));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/ListBullets.mjs";
const w = B((e, t) => /* @__PURE__ */ n.createElement(d, a(m({ ref: t }, e), { weights: u })));
w.displayName = "ListBullets";
export {
  w as ListBullets
};
