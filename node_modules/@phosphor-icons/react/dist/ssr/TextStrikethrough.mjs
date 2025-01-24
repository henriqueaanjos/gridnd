var f = Object.defineProperty, h = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      S.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => h(e, p(t));
import c, { forwardRef as g } from "react";
import x from "../lib/SSRBase.mjs";
import R from "../defs/TextStrikethrough.mjs";
const d = g((e, t) => /* @__PURE__ */ c.createElement(x, i(a({ ref: t }, e), { weights: R })));
d.displayName = "TextStrikethrough";
export {
  d as TextStrikethrough
};
