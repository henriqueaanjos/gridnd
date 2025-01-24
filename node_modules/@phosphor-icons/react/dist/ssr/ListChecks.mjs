var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var s = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && s(t, r, e[r]);
  if (o)
    for (var r of o(e))
      h.call(e, r) && s(t, r, e[r]);
  return t;
}, a = (t, e) => c(t, f(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/ListChecks.mjs";
const n = d((t, e) => /* @__PURE__ */ R.createElement(k, a(m({ ref: e }, t), { weights: l })));
n.displayName = "ListChecks";
export {
  n as ListChecks
};
