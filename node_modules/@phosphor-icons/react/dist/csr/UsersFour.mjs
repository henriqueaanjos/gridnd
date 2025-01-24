var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (s)
    for (var o of s(r))
      n.call(r, o) && t(e, o, r[o]);
  return e;
}, a = (e, r) => i(e, p(r));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/UsersFour.mjs";
const F = l((e, r) => /* @__PURE__ */ d.createElement(u, a(m({ ref: r }, e), { weights: w })));
F.displayName = "UsersFour";
export {
  F as UsersFour
};
