var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      R.call(e, r) && o(t, r, e[r]);
  return t;
}, c = (t, e) => i(t, p(e));
import l, { forwardRef as n } from "react";
import g from "../lib/SSRBase.mjs";
import d from "../defs/Rectangle.mjs";
const w = n((t, e) => /* @__PURE__ */ l.createElement(g, c(m({ ref: e }, t), { weights: d })));
w.displayName = "Rectangle";
export {
  w as Rectangle
};
