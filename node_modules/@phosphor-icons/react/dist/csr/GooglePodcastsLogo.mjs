var c = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (e, o, t) => o in e ? c(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, s = (e, o) => {
  for (var t in o || (o = {}))
    i.call(o, t) && a(e, t, o[t]);
  if (r)
    for (var t of r(o))
      p.call(o, t) && a(e, t, o[t]);
  return e;
}, m = (e, o) => f(e, g(o));
import d, { forwardRef as l } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/GooglePodcastsLogo.mjs";
const G = l((e, o) => /* @__PURE__ */ d.createElement(n, m(s({ ref: o }, e), { weights: w })));
G.displayName = "GooglePodcastsLogo";
export {
  G as GooglePodcastsLogo
};
