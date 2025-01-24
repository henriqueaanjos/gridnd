var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, t = (e, o) => {
  for (var m in o || (o = {}))
    d.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      n.call(o, m) && a(e, m, o[m]);
  return e;
}, i = (e, o) => p(e, s(o));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Diamond.mjs";
const D = R((e, o) => /* @__PURE__ */ c.createElement(l, i(t({ ref: o }, e), { weights: w })));
D.displayName = "Diamond";
export {
  D as Diamond
};
