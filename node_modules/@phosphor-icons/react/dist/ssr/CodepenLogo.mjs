var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      n.call(o, r) && m(e, r, o[r]);
  return e;
}, p = (e, o) => i(e, s(o));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/CodepenLogo.mjs";
const w = g((e, o) => /* @__PURE__ */ c.createElement(R, p(a({ ref: o }, e), { weights: l })));
w.displayName = "CodepenLogo";
export {
  w as CodepenLogo
};
