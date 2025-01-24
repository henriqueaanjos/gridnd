var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && o(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import C, { forwardRef as h } from "react";
import x from "../lib/SSRBase.mjs";
import R from "../defs/ChatCircleText.mjs";
const d = h((t, e) => /* @__PURE__ */ C.createElement(x, i(m({ ref: e }, t), { weights: R })));
d.displayName = "ChatCircleText";
export {
  d as ChatCircleText
};
