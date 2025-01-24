var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    S.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, p = (e, o) => i(e, s(o));
import g, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SkypeLogo.mjs";
const k = y((e, o) => /* @__PURE__ */ g.createElement(R, p(a({ ref: o }, e), { weights: d })));
k.displayName = "SkypeLogo";
export {
  k as SkypeLogo
};
