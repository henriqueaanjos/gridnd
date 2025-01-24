var p = Object.defineProperty, s = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    S.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && m(t, r, e[r]);
  return t;
}, f = (t, e) => s(t, i(e));
import N, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/NotSupersetOf.mjs";
const n = R((t, e) => /* @__PURE__ */ N.createElement(d, f(a({ ref: e }, t), { weights: l })));
n.displayName = "NotSupersetOf";
export {
  n as NotSupersetOf
};
