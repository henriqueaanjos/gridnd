var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      g.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import x, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/PixLogo.mjs";
const n = R((e, o) => /* @__PURE__ */ x.createElement(d, i(a({ ref: o }, e), { weights: l })));
n.displayName = "PixLogo";
export {
  n as PixLogo
};
