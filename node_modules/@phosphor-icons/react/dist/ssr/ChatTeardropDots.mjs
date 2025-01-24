var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    d.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      c.call(r, t) && a(o, t, r[t]);
  return o;
}, p = (o, r) => f(o, i(r));
import h, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ChatTeardropDots.mjs";
const w = R((o, r) => /* @__PURE__ */ h.createElement(l, p(m({ ref: r }, o), { weights: n })));
w.displayName = "ChatTeardropDots";
export {
  w as ChatTeardropDots
};
