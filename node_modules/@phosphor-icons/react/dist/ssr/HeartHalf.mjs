var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      H.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/HeartHalf.mjs";
const w = R((r, e) => /* @__PURE__ */ c.createElement(d, f(m({ ref: e }, r), { weights: n })));
w.displayName = "HeartHalf";
export {
  w as HeartHalf
};
