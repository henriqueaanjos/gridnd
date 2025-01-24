var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && a(r, t, e[t]);
  return r;
}, s = (r, e) => f(r, i(e));
import l, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import d from "../defs/UserRectangle.mjs";
const w = R((r, e) => /* @__PURE__ */ l.createElement(g, s(m({ ref: e }, r), { weights: d })));
w.displayName = "UserRectangle";
export {
  w as UserRectangle
};
