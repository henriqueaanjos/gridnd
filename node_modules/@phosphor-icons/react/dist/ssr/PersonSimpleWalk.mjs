var p = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      n.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => s(r, l(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PersonSimpleWalk.mjs";
const k = c((r, e) => /* @__PURE__ */ S.createElement(R, i(t({ ref: e }, r), { weights: d })));
k.displayName = "PersonSimpleWalk";
export {
  k as PersonSimpleWalk
};
