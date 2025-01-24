var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && a(t, r, e[r]);
  return t;
}, f = (t, e) => n(t, p(e));
import d, { forwardRef as C } from "react";
import h from "../lib/IconBase.mjs";
import x from "../defs/ChatCenteredText.mjs";
const l = C((t, e) => /* @__PURE__ */ d.createElement(h, f(m({ ref: e }, t), { weights: x })));
l.displayName = "ChatCenteredText";
export {
  l as ChatCenteredText
};
