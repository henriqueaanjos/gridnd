var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      R.call(e, o) && a(t, o, e[o]);
  return t;
}, c = (t, e) => i(t, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import q from "../defs/Racquet.mjs";
const u = d((t, e) => /* @__PURE__ */ n.createElement(l, c(m({ ref: e }, t), { weights: q })));
u.displayName = "Racquet";
export {
  u as Racquet
};
