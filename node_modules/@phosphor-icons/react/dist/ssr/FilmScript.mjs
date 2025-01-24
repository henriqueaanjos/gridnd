var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (t, r, e) => r in t ? p(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, o = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && i(t, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && i(t, e, r[e]);
  return t;
}, a = (t, r) => c(t, f(r));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/FilmScript.mjs";
const w = R((t, r) => /* @__PURE__ */ S.createElement(d, a(o({ ref: r }, t), { weights: n })));
w.displayName = "FilmScript";
export {
  w as FilmScript
};
