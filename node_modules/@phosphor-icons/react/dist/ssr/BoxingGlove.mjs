var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    l.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      n.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import c, { forwardRef as g } from "react";
import x from "../lib/SSRBase.mjs";
import B from "../defs/BoxingGlove.mjs";
const R = g((e, o) => /* @__PURE__ */ c.createElement(x, i(a({ ref: o }, e), { weights: B })));
R.displayName = "BoxingGlove";
export {
  R as BoxingGlove
};
