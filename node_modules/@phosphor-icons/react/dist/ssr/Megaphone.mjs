var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, p = (o, e) => i(o, s(e));
import g, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Megaphone.mjs";
const l = h((o, e) => /* @__PURE__ */ g.createElement(R, p(m({ ref: e }, o), { weights: d })));
l.displayName = "Megaphone";
export {
  l as Megaphone
};
