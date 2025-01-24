var d = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? d(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      p.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => f(e, i(o));
import s, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import g from "../defs/SoundcloudLogo.mjs";
const w = l((e, o) => /* @__PURE__ */ s.createElement(u, c(a({ ref: o }, e), { weights: g })));
w.displayName = "SoundcloudLogo";
export {
  w as SoundcloudLogo
};
