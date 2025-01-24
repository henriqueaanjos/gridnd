var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var s = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, t = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && s(o, e, r[e]);
  if (a)
    for (var e of a(r))
      w.call(r, e) && s(o, e, r[e]);
  return o;
}, m = (o, r) => i(o, p(r));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Password.mjs";
const P = R((o, r) => /* @__PURE__ */ c.createElement(l, m(t({ ref: r }, o), { weights: n })));
P.displayName = "Password";
export {
  P as Password
};
