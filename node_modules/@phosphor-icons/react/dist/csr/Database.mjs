var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, m = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && r(e, t, a[t]);
  if (o)
    for (var t of o(a))
      n.call(a, t) && r(e, t, a[t]);
  return e;
}, s = (e, a) => i(e, p(a));
import b, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Database.mjs";
const D = d((e, a) => /* @__PURE__ */ b.createElement(l, s(m({ ref: a }, e), { weights: w })));
D.displayName = "Database";
export {
  D as Database
};
