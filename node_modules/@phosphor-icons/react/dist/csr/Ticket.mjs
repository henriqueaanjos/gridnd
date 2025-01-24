var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && m(t, o, e[o]);
  return t;
}, i = (t, e) => f(t, p(e));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Ticket.mjs";
const I = k((t, e) => /* @__PURE__ */ d.createElement(l, i(a({ ref: e }, t), { weights: w })));
I.displayName = "Ticket";
export {
  I as Ticket
};
