var i = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      d.call(o, t) && m(r, t, o[t]);
  return r;
}, f = (r, o) => s(r, c(o));
import g, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/MicrosoftWordLogo.mjs";
const I = n((r, o) => /* @__PURE__ */ g.createElement(l, f(a({ ref: o }, r), { weights: w })));
I.displayName = "MicrosoftWordLogo";
export {
  I as MicrosoftWordLogo
};
