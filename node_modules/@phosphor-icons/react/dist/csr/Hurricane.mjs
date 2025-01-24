var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      s.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, n(r));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Hurricane.mjs";
const H = l((e, r) => /* @__PURE__ */ d.createElement(u, i(m({ ref: r }, e), { weights: w })));
H.displayName = "Hurricane";
export {
  H as Hurricane
};
