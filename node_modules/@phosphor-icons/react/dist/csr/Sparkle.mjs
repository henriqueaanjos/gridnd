var f = Object.defineProperty, i = Object.defineProperties;
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
}, p = (r, e) => i(r, s(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/Sparkle.mjs";
const I = d((r, e) => /* @__PURE__ */ n.createElement(k, p(m({ ref: e }, r), { weights: w })));
I.displayName = "Sparkle";
export {
  I as Sparkle
};
