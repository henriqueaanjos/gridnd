var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    w.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import N, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/NumberTwo.mjs";
const l = R((r, e) => /* @__PURE__ */ N.createElement(b, f(a({ ref: e }, r), { weights: d })));
l.displayName = "NumberTwo";
export {
  l as NumberTwo
};
