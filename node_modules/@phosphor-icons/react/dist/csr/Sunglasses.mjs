var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (s, e, o) => e in s ? f(s, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[e] = o, t = (s, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(s, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(s, o, e[o]);
  return s;
}, m = (s, e) => i(s, n(e));
import l, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/Sunglasses.mjs";
const w = g((s, e) => /* @__PURE__ */ l.createElement(d, m(t({ ref: e }, s), { weights: u })));
w.displayName = "Sunglasses";
export {
  w as Sunglasses
};
