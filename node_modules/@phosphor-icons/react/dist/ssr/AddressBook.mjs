var d = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? d(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && t(e, r, o[r]);
  if (s)
    for (var r of s(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => f(e, i(o));
import B, { forwardRef as R } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/AddressBook.mjs";
const n = R((e, o) => /* @__PURE__ */ B.createElement(k, a(m({ ref: o }, e), { weights: l })));
n.displayName = "AddressBook";
export {
  n as AddressBook
};
