var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    B.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && m(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/BeerBottle.mjs";
const w = R((t, e) => /* @__PURE__ */ c.createElement(d, f(a({ ref: e }, t), { weights: n })));
w.displayName = "BeerBottle";
export {
  w as BeerBottle
};
