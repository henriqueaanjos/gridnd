var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import n, { forwardRef as u } from "react";
import S from "../lib/SSRBase.mjs";
import c from "../defs/CloudSun.mjs";
const R = u((e, o) => /* @__PURE__ */ n.createElement(S, f(a({ ref: o }, e), { weights: c })));
R.displayName = "CloudSun";
export {
  R as CloudSun
};
