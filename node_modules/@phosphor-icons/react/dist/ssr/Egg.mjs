var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? g(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => i(r, p(e));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Egg.mjs";
const n = R((r, e) => /* @__PURE__ */ E.createElement(d, f(a({ ref: e }, r), { weights: l })));
n.displayName = "Egg";
export {
  n as Egg
};
