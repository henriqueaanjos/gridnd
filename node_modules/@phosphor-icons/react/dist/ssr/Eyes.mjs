var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      y.call(e, o) && m(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Eyes.mjs";
const n = R((r, e) => /* @__PURE__ */ E.createElement(d, s(a({ ref: e }, r), { weights: l })));
n.displayName = "Eyes";
export {
  n as Eyes
};
