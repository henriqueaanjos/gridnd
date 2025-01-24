var p = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    f.call(t, r) && i(e, r, t[r]);
  if (a)
    for (var r of a(t))
      s.call(t, r) && i(e, r, t[r]);
  return e;
}, m = (e, t) => l(e, c(t));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/SplitVertical.mjs";
const w = R((e, t) => /* @__PURE__ */ S.createElement(d, m(o({ ref: t }, e), { weights: n })));
w.displayName = "SplitVertical";
export {
  w as SplitVertical
};
