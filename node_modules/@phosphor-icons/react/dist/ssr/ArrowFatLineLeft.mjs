var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      w.call(e, t) && a(r, t, e[t]);
  return r;
}, f = (r, e) => p(r, s(e));
import L, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowFatLineLeft.mjs";
const l = c((r, e) => /* @__PURE__ */ L.createElement(R, f(m({ ref: e }, r), { weights: d })));
l.displayName = "ArrowFatLineLeft";
export {
  l as ArrowFatLineLeft
};
