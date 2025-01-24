var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (e, o, s) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[o] = s, a = (e, o) => {
  for (var s in o || (o = {}))
    R.call(o, s) && r(e, s, o[s]);
  if (m)
    for (var s of m(o))
      c.call(o, s) && r(e, s, o[s]);
  return e;
}, t = (e, o) => f(e, i(o));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/CompassRose.mjs";
const C = l((e, o) => /* @__PURE__ */ d.createElement(n, t(a({ ref: o }, e), { weights: w })));
C.displayName = "CompassRose";
export {
  C as CompassRose
};
