var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && a(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, s(e));
import x, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/TextAa.mjs";
const A = d((t, e) => /* @__PURE__ */ x.createElement(l, f(m({ ref: e }, t), { weights: w })));
A.displayName = "TextAa";
export {
  A as TextAa
};
