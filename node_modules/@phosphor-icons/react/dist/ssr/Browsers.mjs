var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    w.call(r, o) && t(e, o, r[o]);
  if (s)
    for (var o of s(r))
      c.call(r, o) && t(e, o, r[o]);
  return e;
}, a = (e, r) => i(e, p(r));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Browsers.mjs";
const n = R((e, r) => /* @__PURE__ */ B.createElement(d, a(m({ ref: r }, e), { weights: l })));
n.displayName = "Browsers";
export {
  n as Browsers
};
