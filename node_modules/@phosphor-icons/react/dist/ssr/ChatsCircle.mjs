var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      l.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => c(r, f(e));
import C, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ChatsCircle.mjs";
const n = h((r, e) => /* @__PURE__ */ C.createElement(R, i(m({ ref: e }, r), { weights: d })));
n.displayName = "ChatsCircle";
export {
  n as ChatsCircle
};
