var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      d.call(r, e) && t(o, e, r[e]);
  return o;
}, i = (o, r) => f(o, s(r));
import w, { forwardRef as n } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/SkipForward.mjs";
const F = n((o, r) => /* @__PURE__ */ w.createElement(k, i(m({ ref: r }, o), { weights: l })));
F.displayName = "SkipForward";
export {
  F as SkipForward
};
