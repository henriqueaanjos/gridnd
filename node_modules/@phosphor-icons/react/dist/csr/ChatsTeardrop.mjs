var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      d.call(r, o) && t(e, o, r[o]);
  return e;
}, p = (e, r) => f(e, i(r));
import h, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/ChatsTeardrop.mjs";
const C = n((e, r) => /* @__PURE__ */ h.createElement(l, p(m({ ref: r }, e), { weights: w })));
C.displayName = "ChatsTeardrop";
export {
  C as ChatsTeardrop
};
