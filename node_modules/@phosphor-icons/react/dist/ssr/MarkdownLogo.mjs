var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    d.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      n.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import w, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/MarkdownLogo.mjs";
const k = c((r, o) => /* @__PURE__ */ w.createElement(g, f(m({ ref: o }, r), { weights: R })));
k.displayName = "MarkdownLogo";
export {
  k as MarkdownLogo
};
