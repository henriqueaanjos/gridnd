var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      l.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import n, { forwardRef as x } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/Mailbox.mjs";
const w = x((e, o) => /* @__PURE__ */ n.createElement(b, i(m({ ref: o }, e), { weights: d })));
w.displayName = "Mailbox";
export {
  w as Mailbox
};
