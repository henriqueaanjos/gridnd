var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    l.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      w.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => s(e, f(r));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowsOutSimple.mjs";
const n = c((e, r) => /* @__PURE__ */ S.createElement(R, i(a({ ref: r }, e), { weights: d })));
n.displayName = "ArrowsOutSimple";
export {
  n as ArrowsOutSimple
};
