var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      l.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => f(o, p(e));
import n, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Selection.mjs";
const w = S((o, e) => /* @__PURE__ */ n.createElement(R, i(a({ ref: e }, o), { weights: d })));
w.displayName = "Selection";
export {
  w as Selection
};
