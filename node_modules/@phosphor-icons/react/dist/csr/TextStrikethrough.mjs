var f = Object.defineProperty, h = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      c.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => h(e, p(t));
import g, { forwardRef as n } from "react";
import x from "../lib/IconBase.mjs";
import d from "../defs/TextStrikethrough.mjs";
const k = n((e, t) => /* @__PURE__ */ g.createElement(x, i(a({ ref: t }, e), { weights: d })));
k.displayName = "TextStrikethrough";
export {
  k as TextStrikethrough
};
