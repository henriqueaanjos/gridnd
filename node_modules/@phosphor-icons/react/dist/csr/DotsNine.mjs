var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => f(o, n(e));
import N, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/DotsNine.mjs";
const D = d((o, e) => /* @__PURE__ */ N.createElement(l, i(a({ ref: e }, o), { weights: w })));
D.displayName = "DotsNine";
export {
  D as DotsNine
};
