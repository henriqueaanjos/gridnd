var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      E.call(e, r) && m(t, r, e[r]);
  return t;
}, c = (t, e) => i(t, p(e));
import R, { forwardRef as d } from "react";
import j from "../lib/SSRBase.mjs";
import l from "../defs/Eject.mjs";
const n = d((t, e) => /* @__PURE__ */ R.createElement(j, c(a({ ref: e }, t), { weights: l })));
n.displayName = "Eject";
export {
  n as Eject
};
