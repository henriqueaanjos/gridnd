var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (s, e, o) => e in s ? f(s, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[e] = o, t = (s, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(s, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(s, o, e[o]);
  return s;
}, m = (s, e) => i(s, p(e));
import g, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import E from "../defs/Eyeglasses.mjs";
const d = n((s, e) => /* @__PURE__ */ g.createElement(y, m(t({ ref: e }, s), { weights: E })));
d.displayName = "Eyeglasses";
export {
  d as Eyeglasses
};
