var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    l.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import x, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Mailbox.mjs";
const n = R((e, o) => /* @__PURE__ */ x.createElement(b, i(m({ ref: o }, e), { weights: d })));
n.displayName = "Mailbox";
export {
  n as Mailbox
};
