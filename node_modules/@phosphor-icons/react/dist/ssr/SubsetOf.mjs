var s = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    S.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && m(t, r, e[r]);
  return t;
}, f = (t, e) => i(t, p(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/SubsetOf.mjs";
const n = b((t, e) => /* @__PURE__ */ R.createElement(d, f(a({ ref: e }, t), { weights: l })));
n.displayName = "SubsetOf";
export {
  n as SubsetOf
};
