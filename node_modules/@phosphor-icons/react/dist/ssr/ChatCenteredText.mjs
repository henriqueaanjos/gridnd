var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && o(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import C, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import x from "../defs/ChatCenteredText.mjs";
const R = c((t, e) => /* @__PURE__ */ C.createElement(h, f(m({ ref: e }, t), { weights: x })));
R.displayName = "ChatCenteredText";
export {
  R as ChatCenteredText
};
