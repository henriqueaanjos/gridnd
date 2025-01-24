var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      n.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => s(r, f(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PersonSimple.mjs";
const w = c((r, e) => /* @__PURE__ */ S.createElement(R, i(a({ ref: e }, r), { weights: d })));
w.displayName = "PersonSimple";
export {
  w as PersonSimple
};
