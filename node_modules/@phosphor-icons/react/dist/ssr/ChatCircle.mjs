var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      l.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, p(e));
import C, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ChatCircle.mjs";
const n = h((r, e) => /* @__PURE__ */ C.createElement(R, i(m({ ref: e }, r), { weights: d })));
n.displayName = "ChatCircle";
export {
  n as ChatCircle
};
