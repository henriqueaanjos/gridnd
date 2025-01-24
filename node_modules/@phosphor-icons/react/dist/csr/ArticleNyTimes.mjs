var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(r, t, e[t]);
  if (m)
    for (var t of m(e))
      l.call(e, t) && o(r, t, e[t]);
  return r;
}, a = (r, e) => c(r, f(e));
import n, { forwardRef as y } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/ArticleNyTimes.mjs";
const w = y((r, e) => /* @__PURE__ */ n.createElement(N, a(i({ ref: e }, r), { weights: d })));
w.displayName = "ArticleNyTimes";
export {
  w as ArticleNyTimes
};
