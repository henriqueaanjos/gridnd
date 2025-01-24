var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, t = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      c.call(r, o) && a(e, o, r[o]);
  return e;
}, u = (e, r) => i(e, p(r));
import n, { forwardRef as N } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberSquareFour.mjs";
const l = N((e, r) => /* @__PURE__ */ n.createElement(b, u(t({ ref: r }, e), { weights: d })));
l.displayName = "NumberSquareFour";
export {
  l as NumberSquareFour
};
