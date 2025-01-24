var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      n.call(e, r) && a(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import d, { forwardRef as l } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/Waveform.mjs";
const I = l((o, e) => /* @__PURE__ */ d.createElement(v, f(t({ ref: e }, o), { weights: w })));
I.displayName = "Waveform";
export {
  I as Waveform
};
