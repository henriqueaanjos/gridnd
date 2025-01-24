var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    d.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      c.call(r, a) && t(e, a, r[a]);
  return e;
}, p = (e, r) => i(e, s(r));
import h, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ChatTeardrop.mjs";
const w = R((e, r) => /* @__PURE__ */ h.createElement(l, p(m({ ref: r }, e), { weights: n })));
w.displayName = "ChatTeardrop";
export {
  w as ChatTeardrop
};
