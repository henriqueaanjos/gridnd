var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      n.call(e, r) && a(t, r, e[r]);
  return t;
}, s = (t, e) => i(t, p(e));
import C, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/ChatCenteredDots.mjs";
const l = c((t, e) => /* @__PURE__ */ C.createElement(h, s(m({ ref: e }, t), { weights: R })));
l.displayName = "ChatCenteredDots";
export {
  l as ChatCenteredDots
};
