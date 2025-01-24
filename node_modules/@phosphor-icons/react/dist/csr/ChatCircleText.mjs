var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && a(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import C, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import x from "../defs/ChatCircleText.mjs";
const d = h((t, e) => /* @__PURE__ */ C.createElement(n, i(m({ ref: e }, t), { weights: x })));
d.displayName = "ChatCircleText";
export {
  d as ChatCircleText
};
