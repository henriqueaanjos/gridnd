var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    w.call(e, a) && p(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && p(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, i(e));
import N, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Newspaper.mjs";
const n = R((r, e) => /* @__PURE__ */ N.createElement(d, m(t({ ref: e }, r), { weights: l })));
n.displayName = "Newspaper";
export {
  n as Newspaper
};
