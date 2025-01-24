var s = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    f.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      h.call(e, a) && o(r, a, e[a]);
  return r;
}, i = (r, e) => l(r, c(e));
import p, { forwardRef as C } from "react";
import S from "../lib/SSRBase.mjs";
import R from "../defs/ChatCircleSlash.mjs";
const d = C((r, e) => /* @__PURE__ */ p.createElement(S, i(m({ ref: e }, r), { weights: R })));
d.displayName = "ChatCircleSlash";
export {
  d as ChatCircleSlash
};
