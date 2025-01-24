var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    w.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && m(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, p(r));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Browser.mjs";
const n = R((e, r) => /* @__PURE__ */ B.createElement(d, s(a({ ref: r }, e), { weights: l })));
n.displayName = "Browser";
export {
  n as Browser
};
