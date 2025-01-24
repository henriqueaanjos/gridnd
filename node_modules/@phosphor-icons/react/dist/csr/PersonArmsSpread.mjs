var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, s = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      c.call(r, o) && a(e, o, r[o]);
  return e;
}, t = (e, r) => f(e, i(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/PersonArmsSpread.mjs";
const I = l((e, r) => /* @__PURE__ */ d.createElement(w, t(s({ ref: r }, e), { weights: A })));
I.displayName = "PersonArmsSpread";
export {
  I as PersonArmsSpread
};
