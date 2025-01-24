var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      R.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import d, { forwardRef as k } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Ticket.mjs";
const w = k((t, e) => /* @__PURE__ */ d.createElement(l, i(a({ ref: e }, t), { weights: n })));
w.displayName = "Ticket";
export {
  w as Ticket
};
