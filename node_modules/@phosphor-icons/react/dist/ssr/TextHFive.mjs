var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      x.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => p(t, s(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/TextHFive.mjs";
const v = d((t, e) => /* @__PURE__ */ R.createElement(l, i(a({ ref: e }, t), { weights: n })));
v.displayName = "TextHFive";
export {
  v as TextHFive
};
