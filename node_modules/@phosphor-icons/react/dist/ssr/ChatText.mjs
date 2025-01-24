var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      h.call(t, r) && o(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import x, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ChatText.mjs";
const n = R((e, t) => /* @__PURE__ */ x.createElement(d, f(m({ ref: t }, e), { weights: l })));
n.displayName = "ChatText";
export {
  n as ChatText
};
