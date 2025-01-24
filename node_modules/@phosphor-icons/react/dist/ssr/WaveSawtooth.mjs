var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    w.call(o, e) && r(t, e, o[e]);
  if (a)
    for (var e of a(o))
      S.call(o, e) && r(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/WaveSawtooth.mjs";
const l = h((t, o) => /* @__PURE__ */ c.createElement(R, f(m({ ref: o }, t), { weights: d })));
l.displayName = "WaveSawtooth";
export {
  l as WaveSawtooth
};
