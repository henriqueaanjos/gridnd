var p = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      S.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => n(r, f(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Spinner.mjs";
const w = R((r, e) => /* @__PURE__ */ c.createElement(d, i(a({ ref: e }, r), { weights: l })));
w.displayName = "Spinner";
export {
  w as Spinner
};
