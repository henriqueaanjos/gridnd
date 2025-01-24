var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    d.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      c.call(r, a) && t(e, a, r[a]);
  return e;
}, p = (e, r) => f(e, i(r));
import h, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ChatsTeardrop.mjs";
const w = R((e, r) => /* @__PURE__ */ h.createElement(l, p(m({ ref: r }, e), { weights: n })));
w.displayName = "ChatsTeardrop";
export {
  w as ChatsTeardrop
};
