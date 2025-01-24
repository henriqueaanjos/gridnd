var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      S.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Shovel.mjs";
const n = h((o, e) => /* @__PURE__ */ c.createElement(R, f(a({ ref: e }, o), { weights: d })));
n.displayName = "Shovel";
export {
  n as Shovel
};
