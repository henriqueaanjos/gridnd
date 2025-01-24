var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, m = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      R.call(a, t) && o(e, t, a[t]);
  return e;
}, s = (e, a) => i(e, p(a));
import b, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Database.mjs";
const w = d((e, a) => /* @__PURE__ */ b.createElement(l, s(m({ ref: a }, e), { weights: n })));
w.displayName = "Database";
export {
  w as Database
};
