var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && m(t, o, e[o]);
  return t;
}, i = (t, e) => p(t, s(e));
import n, { forwardRef as x } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FileTxt.mjs";
const F = x((t, e) => /* @__PURE__ */ n.createElement(d, i(a({ ref: e }, t), { weights: w })));
F.displayName = "FileTxt";
export {
  F as FileTxt
};
