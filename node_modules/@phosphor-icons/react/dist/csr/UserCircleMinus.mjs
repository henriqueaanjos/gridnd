var a = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (r, e, o) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && s(r, o, e[o]);
  if (i)
    for (var o of i(e))
      p.call(e, o) && s(r, o, e[o]);
  return r;
}, m = (r, e) => c(r, f(e));
import l, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/UserCircleMinus.mjs";
const C = d((r, e) => /* @__PURE__ */ l.createElement(u, m(t({ ref: e }, r), { weights: w })));
C.displayName = "UserCircleMinus";
export {
  C as UserCircleMinus
};
