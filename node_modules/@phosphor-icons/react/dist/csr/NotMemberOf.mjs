var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import N, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/NotMemberOf.mjs";
const w = b((o, e) => /* @__PURE__ */ N.createElement(d, f(a({ ref: e }, o), { weights: l })));
w.displayName = "NotMemberOf";
export {
  w as NotMemberOf
};
