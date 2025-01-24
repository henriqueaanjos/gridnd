var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      d.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, p(e));
import l, { forwardRef as c } from "react";
import x from "../lib/SSRBase.mjs";
import R from "../defs/TextAUnderline.mjs";
const w = c((r, e) => /* @__PURE__ */ l.createElement(x, i(a({ ref: e }, r), { weights: R })));
w.displayName = "TextAUnderline";
export {
  w as TextAUnderline
};
