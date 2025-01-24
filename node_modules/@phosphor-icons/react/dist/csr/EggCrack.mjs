var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      s.call(r, o) && t(e, o, r[o]);
  return e;
}, c = (e, r) => g(e, i(r));
import n, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/EggCrack.mjs";
const l = E((e, r) => /* @__PURE__ */ n.createElement(d, c(m({ ref: r }, e), { weights: k })));
l.displayName = "EggCrack";
export {
  l as EggCrack
};
