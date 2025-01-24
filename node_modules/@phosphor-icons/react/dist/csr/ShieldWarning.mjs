var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && i(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && i(r, o, e[o]);
  return r;
}, m = (r, e) => f(r, p(e));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ShieldWarning.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(g, m(t({ ref: e }, r), { weights: h })));
w.displayName = "ShieldWarning";
export {
  w as ShieldWarning
};
