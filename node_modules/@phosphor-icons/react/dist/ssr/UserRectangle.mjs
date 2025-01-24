var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      R.call(e, t) && o(r, t, e[t]);
  return r;
}, s = (r, e) => f(r, i(e));
import l, { forwardRef as n } from "react";
import g from "../lib/SSRBase.mjs";
import d from "../defs/UserRectangle.mjs";
const w = n((r, e) => /* @__PURE__ */ l.createElement(g, s(m({ ref: e }, r), { weights: d })));
w.displayName = "UserRectangle";
export {
  w as UserRectangle
};
