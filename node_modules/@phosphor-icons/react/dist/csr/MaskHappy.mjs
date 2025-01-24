var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, o) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, t = (e, a) => {
  for (var o in a || (a = {}))
    c.call(a, o) && p(e, o, a[o]);
  if (r)
    for (var o of r(a))
      n.call(a, o) && p(e, o, a[o]);
  return e;
}, m = (e, a) => f(e, i(a));
import y, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/MaskHappy.mjs";
const w = d((e, a) => /* @__PURE__ */ y.createElement(k, m(t({ ref: a }, e), { weights: l })));
w.displayName = "MaskHappy";
export {
  w as MaskHappy
};
