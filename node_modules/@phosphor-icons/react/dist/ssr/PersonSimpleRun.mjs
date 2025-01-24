var p = Object.defineProperty, s = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      R.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => s(r, n(e));
import l, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import d from "../defs/PersonSimpleRun.mjs";
const u = S((r, e) => /* @__PURE__ */ l.createElement(c, i(a({ ref: e }, r), { weights: d })));
u.displayName = "PersonSimpleRun";
export {
  u as PersonSimpleRun
};
