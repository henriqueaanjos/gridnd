var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    f.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      h.call(e, a) && o(r, a, e[a]);
  return r;
}, i = (r, e) => c(r, l(e));
import p, { forwardRef as C } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/ChatCircleSlash.mjs";
const w = C((r, e) => /* @__PURE__ */ p.createElement(n, i(m({ ref: e }, r), { weights: d })));
w.displayName = "ChatCircleSlash";
export {
  w as ChatCircleSlash
};
