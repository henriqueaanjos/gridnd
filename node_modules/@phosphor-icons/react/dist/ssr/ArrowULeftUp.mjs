var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    w.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      U.call(r, o) && m(e, o, r[o]);
  return e;
}, f = (e, r) => i(e, s(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ArrowULeftUp.mjs";
const n = R((e, r) => /* @__PURE__ */ c.createElement(d, f(a({ ref: r }, e), { weights: l })));
n.displayName = "ArrowULeftUp";
export {
  n as ArrowULeftUp
};
