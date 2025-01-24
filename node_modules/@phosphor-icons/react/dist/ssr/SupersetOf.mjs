var p = Object.defineProperty, s = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    S.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && m(r, t, e[t]);
  return r;
}, f = (r, e) => s(r, i(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/SupersetOf.mjs";
const u = d((r, e) => /* @__PURE__ */ R.createElement(l, f(a({ ref: e }, r), { weights: n })));
u.displayName = "SupersetOf";
export {
  u as SupersetOf
};
