var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      g.call(e, t) && o(r, t, e[t]);
  return r;
}, f = (r, e) => p(r, s(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Target.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(l, f(m({ ref: e }, r), { weights: n })));
w.displayName = "Target";
export {
  w as Target
};
