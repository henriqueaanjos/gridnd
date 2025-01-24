var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      s.call(e, o) && t(r, o, e[o]);
  return r;
}, l = (r, e) => f(r, i(e));
import d, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/Placeholder.mjs";
const w = h((r, e) => /* @__PURE__ */ d.createElement(R, l(m({ ref: e }, r), { weights: n })));
w.displayName = "Placeholder";
export {
  w as Placeholder
};
