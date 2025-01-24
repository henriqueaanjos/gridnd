var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      l.call(e, t) && a(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, p(e));
import C, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/ChatCircle.mjs";
const w = h((r, e) => /* @__PURE__ */ C.createElement(n, i(m({ ref: e }, r), { weights: d })));
w.displayName = "ChatCircle";
export {
  w as ChatCircle
};
