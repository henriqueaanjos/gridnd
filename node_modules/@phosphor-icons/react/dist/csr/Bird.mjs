var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      d.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => p(e, s(r));
import n, { forwardRef as B } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Bird.mjs";
const I = B((e, r) => /* @__PURE__ */ n.createElement(l, i(a({ ref: r }, e), { weights: w })));
I.displayName = "Bird";
export {
  I as Bird
};
