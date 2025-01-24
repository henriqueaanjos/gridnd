var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    u.call(r, o) && t(e, o, r[o]);
  if (m)
    for (var o of m(r))
      c.call(r, o) && t(e, o, r[o]);
  return e;
}, f = (e, r) => p(e, s(r));
import N, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/NumberFour.mjs";
const l = R((e, r) => /* @__PURE__ */ N.createElement(b, f(a({ ref: r }, e), { weights: d })));
l.displayName = "NumberFour";
export {
  l as NumberFour
};
