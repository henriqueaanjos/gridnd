var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? c(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      s.call(o, r) && m(e, r, o[r]);
  return e;
}, d = (e, o) => f(e, i(o));
import l, { forwardRef as n } from "react";
import u from "../lib/SSRBase.mjs";
import S from "../defs/SoundcloudLogo.mjs";
const g = n((e, o) => /* @__PURE__ */ l.createElement(u, d(a({ ref: o }, e), { weights: S })));
g.displayName = "SoundcloudLogo";
export {
  g as SoundcloudLogo
};
