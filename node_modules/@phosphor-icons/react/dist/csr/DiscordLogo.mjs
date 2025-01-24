var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      d.call(o, e) && m(r, e, o[e]);
  return r;
}, i = (r, o) => c(r, f(o));
import g, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/DiscordLogo.mjs";
const D = n((r, o) => /* @__PURE__ */ g.createElement(l, i(a({ ref: o }, r), { weights: w })));
D.displayName = "DiscordLogo";
export {
  D as DiscordLogo
};
