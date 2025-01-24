var t = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, a) => o in r ? t(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, i = (r, o) => {
  for (var a in o || (o = {}))
    s.call(o, a) && m(r, a, o[a]);
  if (e)
    for (var a of e(o))
      c.call(o, a) && m(r, a, o[a]);
  return r;
}, n = (r, o) => f(r, p(o));
import d, { forwardRef as g } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/WarningDiamond.mjs";
const D = g((r, o) => /* @__PURE__ */ d.createElement(l, n(i({ ref: o }, r), { weights: w })));
D.displayName = "WarningDiamond";
export {
  D as WarningDiamond
};
