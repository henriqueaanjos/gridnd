var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && a(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && a(e, r, o[r]);
  return e;
}, f = (e, o) => n(e, p(o));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/PatreonLogo.mjs";
const I = d((e, o) => /* @__PURE__ */ g.createElement(l, f(m({ ref: o }, e), { weights: w })));
I.displayName = "PatreonLogo";
export {
  I as PatreonLogo
};
