var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import n, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import q from "../defs/Equalizer.mjs";
const u = E((r, e) => /* @__PURE__ */ n.createElement(d, i(m({ ref: e }, r), { weights: q })));
u.displayName = "Equalizer";
export {
  u as Equalizer
};
