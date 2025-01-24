var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      d.call(e, r) && m(t, r, e[r]);
  return t;
}, n = (t, e) => i(t, p(e));
import c, { forwardRef as x } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/TextIndent.mjs";
const l = x((t, e) => /* @__PURE__ */ c.createElement(I, n(a({ ref: e }, t), { weights: R })));
l.displayName = "TextIndent";
export {
  l as TextIndent
};
