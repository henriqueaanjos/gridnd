var f = Object.defineProperty, g = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(r, t, e[t]);
  if (i)
    for (var t of i(e))
      s.call(e, t) && o(r, t, e[t]);
  return r;
}, a = (r, e) => g(r, h(e));
import l, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Highlighter.mjs";
const n = c((r, e) => /* @__PURE__ */ l.createElement(R, a(m({ ref: e }, r), { weights: d })));
n.displayName = "Highlighter";
export {
  n as Highlighter
};
