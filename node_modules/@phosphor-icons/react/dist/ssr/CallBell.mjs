var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (l, e, r) => e in l ? f(l, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : l[e] = r, t = (l, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(l, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(l, r, e[r]);
  return l;
}, m = (l, e) => i(l, p(e));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/CallBell.mjs";
const w = R((l, e) => /* @__PURE__ */ B.createElement(d, m(t({ ref: e }, l), { weights: n })));
w.displayName = "CallBell";
export {
  w as CallBell
};
