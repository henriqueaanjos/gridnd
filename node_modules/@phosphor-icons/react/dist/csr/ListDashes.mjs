var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (s, e, t) => e in s ? i(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, a = (s, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && r(s, t, e[t]);
  if (o)
    for (var t of o(e))
      h.call(e, t) && r(s, t, e[t]);
  return s;
}, m = (s, e) => f(s, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/ListDashes.mjs";
const D = d((s, e) => /* @__PURE__ */ n.createElement(l, m(a({ ref: e }, s), { weights: w })));
D.displayName = "ListDashes";
export {
  D as ListDashes
};
