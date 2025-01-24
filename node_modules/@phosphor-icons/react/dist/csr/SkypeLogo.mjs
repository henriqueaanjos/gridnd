var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      g.call(o, r) && m(e, r, o[r]);
  return e;
}, p = (e, o) => i(e, s(o));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/SkypeLogo.mjs";
const l = y((e, o) => /* @__PURE__ */ n.createElement(d, p(a({ ref: o }, e), { weights: k })));
l.displayName = "SkypeLogo";
export {
  l as SkypeLogo
};
