var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    R.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n.call(e, t) && m(r, t, e[t]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as y } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/KeyReturn.mjs";
const u = y((r, e) => /* @__PURE__ */ c.createElement(d, f(a({ ref: e }, r), { weights: l })));
u.displayName = "KeyReturn";
export {
  u as KeyReturn
};
