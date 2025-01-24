var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    R.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => i(r, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Rss.mjs";
const S = l((r, e) => /* @__PURE__ */ d.createElement(n, a(m({ ref: e }, r), { weights: w })));
S.displayName = "Rss";
export {
  S as Rss
};
