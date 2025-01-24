var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var r = (e, o, t) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && r(e, t, o[t]);
  if (m)
    for (var t of m(o))
      g.call(o, t) && r(e, t, o[t]);
  return e;
}, f = (e, o) => p(e, s(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/SteamLogo.mjs";
const I = d((e, o) => /* @__PURE__ */ n.createElement(l, f(a({ ref: o }, e), { weights: w })));
I.displayName = "SteamLogo";
export {
  I as SteamLogo
};
