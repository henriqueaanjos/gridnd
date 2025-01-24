var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => n(o, p(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Metronome.mjs";
const M = l((o, e) => /* @__PURE__ */ d.createElement(w, f(a({ ref: e }, o), { weights: I })));
M.displayName = "Metronome";
export {
  M as Metronome
};
