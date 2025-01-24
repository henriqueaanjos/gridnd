var i = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      p.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => c(r, l(e));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/UserCirclePlus.mjs";
const C = d((r, e) => /* @__PURE__ */ n.createElement(u, a(m({ ref: e }, r), { weights: w })));
C.displayName = "UserCirclePlus";
export {
  C as UserCirclePlus
};
