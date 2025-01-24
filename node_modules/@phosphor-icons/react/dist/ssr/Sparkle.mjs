var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      S.call(e, a) && t(r, a, e[a]);
  return r;
}, p = (r, e) => i(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/Sparkle.mjs";
const n = R((r, e) => /* @__PURE__ */ c.createElement(d, p(m({ ref: e }, r), { weights: k })));
n.displayName = "Sparkle";
export {
  n as Sparkle
};
