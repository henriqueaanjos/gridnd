var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (a, e, o) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, c = (a, e) => {
  for (var o in e || (e = {}))
    i.call(e, o) && t(a, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && t(a, o, e[o]);
  return a;
}, m = (a, e) => s(a, f(e));
import B, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/Backspace.mjs";
const w = d((a, e) => /* @__PURE__ */ B.createElement(k, m(c({ ref: e }, a), { weights: l })));
w.displayName = "Backspace";
export {
  w as Backspace
};
