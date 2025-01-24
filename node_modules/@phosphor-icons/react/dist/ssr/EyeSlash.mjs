var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      S.call(e, a) && t(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import c, { forwardRef as h } from "react";
import y from "../lib/SSRBase.mjs";
import E from "../defs/EyeSlash.mjs";
const R = h((r, e) => /* @__PURE__ */ c.createElement(y, s(m({ ref: e }, r), { weights: E })));
R.displayName = "EyeSlash";
export {
  R as EyeSlash
};
