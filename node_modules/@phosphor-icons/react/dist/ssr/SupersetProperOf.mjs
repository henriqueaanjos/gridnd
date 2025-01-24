var f = Object.defineProperty, s = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    S.call(e, o) && p(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && p(r, o, e[o]);
  return r;
}, a = (r, e) => s(r, i(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/SupersetProperOf.mjs";
const u = d((r, e) => /* @__PURE__ */ R.createElement(l, a(m({ ref: e }, r), { weights: n })));
u.displayName = "SupersetProperOf";
export {
  u as SupersetProperOf
};
