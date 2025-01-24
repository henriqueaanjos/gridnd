var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (s, e, t) => e in s ? i(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, o = (s, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(s, t, e[t]);
  if (r)
    for (var t of r(e))
      h.call(e, t) && a(s, t, e[t]);
  return s;
}, m = (s, e) => f(s, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ListDashes.mjs";
const w = d((s, e) => /* @__PURE__ */ R.createElement(l, m(o({ ref: e }, s), { weights: n })));
w.displayName = "ListDashes";
export {
  w as ListDashes
};
