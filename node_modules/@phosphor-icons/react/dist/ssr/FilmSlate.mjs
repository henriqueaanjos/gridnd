var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (t, e, m) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, o = (t, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(t, m, e[m]);
  if (r)
    for (var m of r(e))
      S.call(e, m) && a(t, m, e[m]);
  return t;
}, i = (t, e) => f(t, p(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/FilmSlate.mjs";
const w = R((t, e) => /* @__PURE__ */ c.createElement(d, i(o({ ref: e }, t), { weights: n })));
w.displayName = "FilmSlate";
export {
  w as FilmSlate
};
