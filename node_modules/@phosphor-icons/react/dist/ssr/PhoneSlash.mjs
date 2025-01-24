var f = Object.defineProperty, h = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, s = (o, e) => h(o, i(e));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/PhoneSlash.mjs";
const d = S((o, e) => /* @__PURE__ */ n.createElement(c, s(m({ ref: e }, o), { weights: R })));
d.displayName = "PhoneSlash";
export {
  d as PhoneSlash
};
