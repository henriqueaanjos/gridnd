var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      S.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/UniteSquare.mjs";
const q = R((r, e) => /* @__PURE__ */ c.createElement(d, i(m({ ref: e }, r), { weights: l })));
q.displayName = "UniteSquare";
export {
  q as UniteSquare
};
