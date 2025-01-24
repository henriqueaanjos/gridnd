var s = Object.defineProperty, c = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var f = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && f(r, t, e[t]);
  if (a)
    for (var t of a(e))
      S.call(e, t) && f(r, t, e[t]);
  return r;
}, m = (r, e) => c(r, i(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/CheckSquareOffset.mjs";
const l = R((r, e) => /* @__PURE__ */ h.createElement(d, m(o({ ref: e }, r), { weights: k })));
l.displayName = "CheckSquareOffset";
export {
  l as CheckSquareOffset
};
