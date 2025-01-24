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
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/MicrosoftTeamsLogo.mjs";
const w = d((e, o) => /* @__PURE__ */ R.createElement(l, s(a({ ref: o }, e), { weights: n })));
w.displayName = "MicrosoftTeamsLogo";
export {
  w as MicrosoftTeamsLogo
};
