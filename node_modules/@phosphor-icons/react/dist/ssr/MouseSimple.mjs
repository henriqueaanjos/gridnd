var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (o, e, m) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, a = (o, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && t(o, m, e[m]);
  if (r)
    for (var m of r(e))
      S.call(e, m) && t(o, m, e[m]);
  return o;
}, i = (o, e) => s(o, f(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/MouseSimple.mjs";
const u = R((o, e) => /* @__PURE__ */ c.createElement(d, i(a({ ref: e }, o), { weights: n })));
u.displayName = "MouseSimple";
export {
  u as MouseSimple
};
