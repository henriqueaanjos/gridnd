var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (e, o, t) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    S.call(o, t) && r(e, t, o[t]);
  if (m)
    for (var t of m(o))
      c.call(o, t) && r(e, t, o[t]);
  return e;
}, f = (e, o) => p(e, s(o));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/SteamLogo.mjs";
const n = R((e, o) => /* @__PURE__ */ g.createElement(d, f(a({ ref: o }, e), { weights: l })));
n.displayName = "SteamLogo";
export {
  n as SteamLogo
};
