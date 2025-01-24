var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && a(t, o, e[o]);
  return t;
}, s = (t, e) => i(t, p(e));
import B, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/Basket.mjs";
const w = d((t, e) => /* @__PURE__ */ B.createElement(k, s(m({ ref: e }, t), { weights: l })));
w.displayName = "Basket";
export {
  w as Basket
};
