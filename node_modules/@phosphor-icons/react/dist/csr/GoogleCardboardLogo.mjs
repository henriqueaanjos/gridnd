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
import c, { forwardRef as l } from "react";
import n from "../lib/IconBase.mjs";
import b from "../defs/GoogleCardboardLogo.mjs";
const w = l((r, o) => /* @__PURE__ */ c.createElement(n, d(m({ ref: o }, r), { weights: b })));
w.displayName = "GoogleCardboardLogo";
export {
  w as GoogleCardboardLogo
};
