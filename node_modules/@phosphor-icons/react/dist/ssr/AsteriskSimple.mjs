var a = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && i(r, t, e[t]);
  if (m)
    for (var t of m(e))
      S.call(e, t) && i(r, t, e[t]);
  return r;
}, s = (r, e) => p(r, f(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/AsteriskSimple.mjs";
const n = R((r, e) => /* @__PURE__ */ c.createElement(d, s(o({ ref: e }, r), { weights: k })));
n.displayName = "AsteriskSimple";
export {
  n as AsteriskSimple
};
