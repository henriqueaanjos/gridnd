var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (m, e, o) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, a = (m, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && t(m, o, e[o]);
  return m;
}, i = (m, e) => f(m, p(e));
import R, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FilmReel.mjs";
const F = n((m, e) => /* @__PURE__ */ R.createElement(d, i(a({ ref: e }, m), { weights: w })));
F.displayName = "FilmReel";
export {
  F as FilmReel
};
