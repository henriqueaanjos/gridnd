var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, s = (e, o) => i(e, p(o));
import g, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/ThreadsLogo.mjs";
const n = h((e, o) => /* @__PURE__ */ g.createElement(R, s(m({ ref: o }, e), { weights: l })));
n.displayName = "ThreadsLogo";
export {
  n as ThreadsLogo
};
