var i = Object.defineProperty, p = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (s, e, r) => e in s ? i(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r, t = (s, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && o(s, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && o(s, r, e[r]);
  return s;
}, m = (s, e) => p(s, c(e));
import u, { forwardRef as d } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/Asclepius.mjs";
const w = d((s, e) => /* @__PURE__ */ u.createElement(R, m(t({ ref: e }, s), { weights: n })));
w.displayName = "Asclepius";
export {
  w as Asclepius,
  w as Caduceus
};
