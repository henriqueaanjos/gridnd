var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      s.call(o, e) && t(r, e, o[e]);
  return r;
}, d = (r, o) => g(r, i(o));
import l, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/GoogleCardboardLogo.mjs";
const n = c((r, o) => /* @__PURE__ */ l.createElement(R, d(m({ ref: o }, r), { weights: b })));
n.displayName = "GoogleCardboardLogo";
export {
  n as GoogleCardboardLogo
};
