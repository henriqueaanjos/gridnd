var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, s = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, a = (r, e) => p(r, f(e));
import h, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/GlobeHemisphereWest.mjs";
const n = R((r, e) => /* @__PURE__ */ h.createElement(b, a(s({ ref: e }, r), { weights: d })));
n.displayName = "GlobeHemisphereWest";
export {
  n as GlobeHemisphereWest
};
