var d = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? d(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, t = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && a(e, r, o[r]);
  if (s)
    for (var r of s(o))
      c.call(o, r) && a(e, r, o[r]);
  return e;
}, m = (e, o) => f(e, i(o));
import n, { forwardRef as B } from "react";
import b from "../lib/IconBase.mjs";
import k from "../defs/AddressBookTabs.mjs";
const l = B((e, o) => /* @__PURE__ */ n.createElement(b, m(t({ ref: o }, e), { weights: k })));
l.displayName = "AddressBookTabs";
export {
  l as AddressBookTabs
};
