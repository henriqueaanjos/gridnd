var i = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, p = (o, e) => s(o, f(e));
import n, { forwardRef as x } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/ApproximateEquals.mjs";
const q = x((o, e) => /* @__PURE__ */ n.createElement(E, p(m({ ref: e }, o), { weights: d })));
q.displayName = "ApproximateEquals";
export {
  q as ApproximateEquals
};
