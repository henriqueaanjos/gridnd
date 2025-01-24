var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var s = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && s(r, o, e[o]);
  if (a)
    for (var o of a(e))
      d.call(e, o) && s(r, o, e[o]);
  return r;
}, m = (r, e) => c(r, f(e));
import l, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/UserCircleDashed.mjs";
const C = h((r, e) => /* @__PURE__ */ l.createElement(n, m(t({ ref: e }, r), { weights: w })));
C.displayName = "UserCircleDashed";
export {
  C as UserCircleDashed
};
