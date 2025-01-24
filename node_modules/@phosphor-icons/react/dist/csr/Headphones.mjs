var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, p = (o, e) => f(o, i(e));
import d, { forwardRef as h } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Headphones.mjs";
const H = h((o, e) => /* @__PURE__ */ d.createElement(l, p(m({ ref: e }, o), { weights: w })));
H.displayName = "Headphones";
export {
  H as Headphones
};
