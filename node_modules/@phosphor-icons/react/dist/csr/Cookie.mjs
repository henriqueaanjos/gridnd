var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      n.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Cookie.mjs";
const C = k((e, o) => /* @__PURE__ */ d.createElement(l, i(a({ ref: o }, e), { weights: w })));
C.displayName = "Cookie";
export {
  C as Cookie
};
