var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, s = (r, e) => p(r, f(e));
import h, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/GlobeHemisphereEast.mjs";
const d = E((r, e) => /* @__PURE__ */ h.createElement(R, s(a({ ref: e }, r), { weights: b })));
d.displayName = "GlobeHemisphereEast";
export {
  d as GlobeHemisphereEast
};
