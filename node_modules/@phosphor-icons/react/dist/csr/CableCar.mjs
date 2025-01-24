var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import C, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/CableCar.mjs";
const w = n((r, e) => /* @__PURE__ */ C.createElement(b, f(m({ ref: e }, r), { weights: d })));
w.displayName = "CableCar";
export {
  w as CableCar
};
