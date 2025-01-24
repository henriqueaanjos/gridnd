var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && i(r, t, e[t]);
  if (m)
    for (var t of m(e))
      l.call(e, t) && i(r, t, e[t]);
  return r;
}, a = (r, e) => c(r, f(e));
import y, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArticleNyTimes.mjs";
const n = N((r, e) => /* @__PURE__ */ y.createElement(R, a(o({ ref: e }, r), { weights: d })));
n.displayName = "ArticleNyTimes";
export {
  n as ArticleNyTimes
};
