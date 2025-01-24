var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      u.call(e, o) && a(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import n, { forwardRef as N } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberSquareZero.mjs";
const l = N((r, e) => /* @__PURE__ */ n.createElement(b, f(t({ ref: e }, r), { weights: d })));
l.displayName = "NumberSquareZero";
export {
  l as NumberSquareZero
};
