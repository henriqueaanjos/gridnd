var c = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (s, e, o) => e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[e] = o, t = (s, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && a(s, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(s, o, e[o]);
  return s;
}, m = (s, e) => i(s, p(e));
import u, { forwardRef as d } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/Asclepius.mjs";
const A = d((s, e) => /* @__PURE__ */ u.createElement(n, m(t({ ref: e }, s), { weights: w })));
A.displayName = "Asclepius";
export {
  A as Asclepius,
  A as Caduceus
};
