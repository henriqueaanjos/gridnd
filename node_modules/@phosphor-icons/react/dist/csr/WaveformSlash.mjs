var s = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => i(o, p(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/WaveformSlash.mjs";
const w = n((o, e) => /* @__PURE__ */ h.createElement(d, f(t({ ref: e }, o), { weights: v })));
w.displayName = "WaveformSlash";
export {
  w as WaveformSlash
};
