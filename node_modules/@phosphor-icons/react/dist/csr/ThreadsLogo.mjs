var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      d.call(o, r) && t(e, r, o[r]);
  return e;
}, s = (e, o) => i(e, p(o));
import g, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import l from "../defs/ThreadsLogo.mjs";
const w = h((e, o) => /* @__PURE__ */ g.createElement(n, s(m({ ref: o }, e), { weights: l })));
w.displayName = "ThreadsLogo";
export {
  w as ThreadsLogo
};
