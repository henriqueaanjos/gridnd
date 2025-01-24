var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, e, t) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, r = (a, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(a, t, e[t]);
  if (m)
    for (var t of m(e))
      c.call(e, t) && o(a, t, e[t]);
  return a;
}, l = (a, e) => f(a, i(e));
import n, { forwardRef as B } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/BaseballHelmet.mjs";
const w = B((a, e) => /* @__PURE__ */ n.createElement(b, l(r({ ref: e }, a), { weights: d })));
w.displayName = "BaseballHelmet";
export {
  w as BaseballHelmet
};
