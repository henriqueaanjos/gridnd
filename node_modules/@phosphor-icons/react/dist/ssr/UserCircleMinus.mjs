var a = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (r, e, i) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, t = (r, e) => {
  for (var i in e || (e = {}))
    p.call(e, i) && s(r, i, e[i]);
  if (o)
    for (var i of o(e))
      l.call(e, i) && s(r, i, e[i]);
  return r;
}, m = (r, e) => c(r, f(e));
import n, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import u from "../defs/UserCircleMinus.mjs";
const w = R((r, e) => /* @__PURE__ */ n.createElement(d, m(t({ ref: e }, r), { weights: u })));
w.displayName = "UserCircleMinus";
export {
  w as UserCircleMinus
};
