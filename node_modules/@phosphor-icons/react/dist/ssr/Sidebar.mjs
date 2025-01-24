var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      S.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import l from "../defs/Sidebar.mjs";
const n = R((r, e) => /* @__PURE__ */ c.createElement(b, i(m({ ref: e }, r), { weights: l })));
n.displayName = "Sidebar";
export {
  n as Sidebar
};
