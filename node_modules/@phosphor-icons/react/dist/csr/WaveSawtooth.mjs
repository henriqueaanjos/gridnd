var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && r(t, e, o[e]);
  if (a)
    for (var e of a(o))
      w.call(o, e) && r(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/WaveSawtooth.mjs";
const v = n((t, o) => /* @__PURE__ */ h.createElement(d, f(m({ ref: o }, t), { weights: l })));
v.displayName = "WaveSawtooth";
export {
  v as WaveSawtooth
};
