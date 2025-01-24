var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var l = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && l(o, t, e[t]);
  if (r)
    for (var t of r(e))
      s.call(e, t) && l(o, t, e[t]);
  return o;
}, a = (o, e) => c(o, f(e));
import n, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SelectionAll.mjs";
const w = S((o, e) => /* @__PURE__ */ n.createElement(R, a(m({ ref: e }, o), { weights: d })));
w.displayName = "SelectionAll";
export {
  w as SelectionAll
};
