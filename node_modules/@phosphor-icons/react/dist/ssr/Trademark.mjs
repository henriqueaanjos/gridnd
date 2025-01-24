var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, t = (e, r) => {
  for (var a in r || (r = {}))
    d.call(r, a) && o(e, a, r[a]);
  if (m)
    for (var a of m(r))
      c.call(r, a) && o(e, a, r[a]);
  return e;
}, f = (e, r) => p(e, s(r));
import R, { forwardRef as k } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Trademark.mjs";
const w = k((e, r) => /* @__PURE__ */ R.createElement(l, f(t({ ref: r }, e), { weights: n })));
w.displayName = "Trademark";
export {
  w as Trademark
};
