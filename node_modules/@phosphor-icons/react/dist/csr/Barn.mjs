var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      c.call(r, o) && t(e, o, r[o]);
  return e;
}, f = (e, r) => n(e, p(r));
import B, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Barn.mjs";
const I = d((e, r) => /* @__PURE__ */ B.createElement(l, f(m({ ref: r }, e), { weights: w })));
I.displayName = "Barn";
export {
  I as Barn
};
