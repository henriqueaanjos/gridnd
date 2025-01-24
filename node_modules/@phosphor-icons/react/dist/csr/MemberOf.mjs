var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      n.call(e, m) && t(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import b, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/MemberOf.mjs";
const I = d((r, e) => /* @__PURE__ */ b.createElement(l, f(a({ ref: e }, r), { weights: w })));
I.displayName = "MemberOf";
export {
  I as MemberOf
};
