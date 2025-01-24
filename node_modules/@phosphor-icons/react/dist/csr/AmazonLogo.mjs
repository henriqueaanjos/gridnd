var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, t = (e, o) => {
  for (var m in o || (o = {}))
    s.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      c.call(o, m) && a(e, m, o[m]);
  return e;
}, f = (e, o) => n(e, p(o));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/AmazonLogo.mjs";
const z = d((e, o) => /* @__PURE__ */ g.createElement(l, f(t({ ref: o }, e), { weights: w })));
z.displayName = "AmazonLogo";
export {
  z as AmazonLogo
};
