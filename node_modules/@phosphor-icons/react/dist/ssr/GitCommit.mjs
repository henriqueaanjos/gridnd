var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var r = (m, t, o) => t in m ? f(m, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[t] = o, i = (m, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && r(m, o, t[o]);
  if (e)
    for (var o of e(t))
      R.call(t, o) && r(m, o, t[o]);
  return m;
}, a = (m, t) => p(m, s(t));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/GitCommit.mjs";
const C = l((m, t) => /* @__PURE__ */ d.createElement(n, a(i({ ref: t }, m), { weights: w })));
C.displayName = "GitCommit";
export {
  C as GitCommit
};
