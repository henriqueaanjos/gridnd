var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (l, e, o) => e in l ? f(l, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[e] = o, t = (l, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(l, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(l, o, e[o]);
  return l;
}, m = (l, e) => i(l, p(e));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/CallBell.mjs";
const C = B((l, e) => /* @__PURE__ */ n.createElement(d, m(t({ ref: e }, l), { weights: w })));
C.displayName = "CallBell";
export {
  C as CallBell
};
