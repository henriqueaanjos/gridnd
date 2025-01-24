var p = Object.defineProperty, s = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (e, o, t) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, i = (e, o) => {
  for (var t in o || (o = {}))
    f.call(o, t) && a(e, t, o[t]);
  if (r)
    for (var t of r(o))
      d.call(o, t) && a(e, t, o[t]);
  return e;
}, m = (e, o) => s(e, n(o));
import l, { forwardRef as C } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/ClosedCaptioning.mjs";
const R = C((e, o) => /* @__PURE__ */ l.createElement(c, m(i({ ref: o }, e), { weights: g })));
R.displayName = "ClosedCaptioning";
export {
  R as ClosedCaptioning
};
