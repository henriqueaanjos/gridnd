var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      y.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Eye.mjs";
const n = R((r, e) => /* @__PURE__ */ E.createElement(d, f(a({ ref: e }, r), { weights: l })));
n.displayName = "Eye";
export {
  n as Eye
};
