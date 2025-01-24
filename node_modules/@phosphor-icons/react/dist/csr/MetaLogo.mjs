var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (e, o, t) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, m = (e, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && a(e, t, o[t]);
  if (r)
    for (var t of r(o))
      g.call(o, t) && a(e, t, o[t]);
  return e;
}, f = (e, o) => p(e, s(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/MetaLogo.mjs";
const I = d((e, o) => /* @__PURE__ */ n.createElement(l, f(m({ ref: o }, e), { weights: w })));
I.displayName = "MetaLogo";
export {
  I as MetaLogo
};
