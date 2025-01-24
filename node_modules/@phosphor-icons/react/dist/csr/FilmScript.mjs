var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? p(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, i = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && o(t, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && o(t, e, r[e]);
  return t;
}, a = (t, r) => c(t, f(r));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/FilmScript.mjs";
const I = d((t, r) => /* @__PURE__ */ n.createElement(w, a(i({ ref: r }, t), { weights: F })));
I.displayName = "FilmScript";
export {
  I as FilmScript
};
