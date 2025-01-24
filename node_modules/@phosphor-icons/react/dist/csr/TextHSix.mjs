var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    x.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && m(t, o, e[o]);
  return t;
}, i = (t, e) => p(t, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/TextHSix.mjs";
const H = d((t, e) => /* @__PURE__ */ n.createElement(l, i(a({ ref: e }, t), { weights: w })));
H.displayName = "TextHSix";
export {
  H as TextHSix
};
