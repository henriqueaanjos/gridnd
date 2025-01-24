var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, l = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(t, o, e[o]);
  return t;
}, m = (t, e) => i(t, p(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/FalloutShelter.mjs";
const w = n((t, e) => /* @__PURE__ */ h.createElement(d, m(l({ ref: e }, t), { weights: u })));
w.displayName = "FalloutShelter";
export {
  w as FalloutShelter
};
