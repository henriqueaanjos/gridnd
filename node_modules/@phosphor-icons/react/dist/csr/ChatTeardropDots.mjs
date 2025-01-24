var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      d.call(o, t) && a(r, t, o[t]);
  return r;
}, p = (r, o) => f(r, i(o));
import h, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/ChatTeardropDots.mjs";
const C = n((r, o) => /* @__PURE__ */ h.createElement(l, p(m({ ref: o }, r), { weights: w })));
C.displayName = "ChatTeardropDots";
export {
  C as ChatTeardropDots
};
