var p = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && i(r, o, e[o]);
  if (m)
    for (var o of m(e))
      f.call(e, o) && i(r, o, e[o]);
  return r;
}, a = (r, e) => s(r, l(e));
import n, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PersonSimpleCircle.mjs";
const w = S((r, e) => /* @__PURE__ */ n.createElement(R, a(t({ ref: e }, r), { weights: d })));
w.displayName = "PersonSimpleCircle";
export {
  w as PersonSimpleCircle
};
