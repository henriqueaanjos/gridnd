var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var i = (t, r, e) => r in t ? p(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, o = (t, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && i(t, e, r[e]);
  if (m)
    for (var e of m(r))
      S.call(r, e) && i(t, e, r[e]);
  return t;
}, a = (t, r) => f(t, s(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/FilmStrip.mjs";
const w = R((t, r) => /* @__PURE__ */ c.createElement(d, a(o({ ref: r }, t), { weights: n })));
w.displayName = "FilmStrip";
export {
  w as FilmStrip
};
