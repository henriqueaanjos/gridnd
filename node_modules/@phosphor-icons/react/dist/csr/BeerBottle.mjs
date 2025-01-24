var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    B.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && m(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, s(e));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/BeerBottle.mjs";
const I = n((t, e) => /* @__PURE__ */ l.createElement(d, f(a({ ref: e }, t), { weights: w })));
I.displayName = "BeerBottle";
export {
  I as BeerBottle
};
