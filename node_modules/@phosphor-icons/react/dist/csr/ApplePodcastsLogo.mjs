var m = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (e, o, t) => o in e ? m(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, p = (e, o) => {
  for (var t in o || (o = {}))
    i.call(o, t) && a(e, t, o[t]);
  if (r)
    for (var t of r(o))
      d.call(o, t) && a(e, t, o[t]);
  return e;
}, s = (e, o) => c(e, f(o));
import l, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/ApplePodcastsLogo.mjs";
const A = g((e, o) => /* @__PURE__ */ l.createElement(n, s(p({ ref: o }, e), { weights: w })));
A.displayName = "ApplePodcastsLogo";
export {
  A as ApplePodcastsLogo
};
