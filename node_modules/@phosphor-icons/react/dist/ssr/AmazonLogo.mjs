var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, t = (e, o) => {
  for (var m in o || (o = {}))
    n.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      c.call(o, m) && a(e, m, o[m]);
  return e;
}, f = (e, o) => p(e, s(o));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/AmazonLogo.mjs";
const w = R((e, o) => /* @__PURE__ */ g.createElement(d, f(t({ ref: o }, e), { weights: l })));
w.displayName = "AmazonLogo";
export {
  w as AmazonLogo
};
