var n = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && m(e, o, r[o]);
  return e;
}, s = (e, r) => f(e, i(r));
import I, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CornersIn.mjs";
const w = R((e, r) => /* @__PURE__ */ I.createElement(d, s(a({ ref: r }, e), { weights: l })));
w.displayName = "CornersIn";
export {
  w as CornersIn
};
