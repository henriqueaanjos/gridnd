var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? g(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (m)
    for (var r of m(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, f = (e, o) => i(e, p(o));
import l, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/GoogleChromeLogo.mjs";
const w = h((e, o) => /* @__PURE__ */ l.createElement(n, f(a({ ref: o }, e), { weights: d })));
w.displayName = "GoogleChromeLogo";
export {
  w as GoogleChromeLogo
};
