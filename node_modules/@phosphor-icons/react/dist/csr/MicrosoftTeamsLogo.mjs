var f = Object.defineProperty, i = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      g.call(o, r) && m(e, r, o[r]);
  return e;
}, s = (e, o) => i(e, c(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/MicrosoftTeamsLogo.mjs";
const I = d((e, o) => /* @__PURE__ */ n.createElement(l, s(a({ ref: o }, e), { weights: w })));
I.displayName = "MicrosoftTeamsLogo";
export {
  I as MicrosoftTeamsLogo
};
