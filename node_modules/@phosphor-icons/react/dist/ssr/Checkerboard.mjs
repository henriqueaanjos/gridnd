var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      d.call(e, o) && t(r, o, e[o]);
  return r;
}, c = (r, e) => i(r, p(e));
import h, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import k from "../defs/Checkerboard.mjs";
const l = R((r, e) => /* @__PURE__ */ h.createElement(b, c(m({ ref: e }, r), { weights: k })));
l.displayName = "Checkerboard";
export {
  l as Checkerboard
};
