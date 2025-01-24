var l = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var f = (r, e, o) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && f(r, o, e[o]);
  if (a)
    for (var o of a(e))
      s.call(e, o) && f(r, o, e[o]);
  return r;
}, m = (r, e) => i(r, n(e));
import c, { forwardRef as u } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ShuffleAngular.mjs";
const d = u((r, e) => /* @__PURE__ */ c.createElement(g, m(t({ ref: e }, r), { weights: h })));
d.displayName = "ShuffleAngular";
export {
  d as ShuffleAngular
};
