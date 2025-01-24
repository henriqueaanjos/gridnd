var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      x.call(e, o) && a(t, o, e[o]);
  return t;
}, s = (t, e) => i(t, p(e));
import B, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import n from "../defs/TextB.mjs";
const T = d((t, e) => /* @__PURE__ */ B.createElement(l, s(m({ ref: e }, t), { weights: n })));
T.displayName = "TextB";
export {
  T as TextB,
  T as TextBolder
};
