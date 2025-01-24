var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var s = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && s(r, e, o[e]);
  if (a)
    for (var e of a(o))
      d.call(o, e) && s(r, e, o[e]);
  return r;
}, m = (r, o) => i(r, p(o));
import w, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import I from "../defs/Password.mjs";
const P = n((r, o) => /* @__PURE__ */ w.createElement(l, m(t({ ref: o }, r), { weights: I })));
P.displayName = "Password";
export {
  P as Password
};
