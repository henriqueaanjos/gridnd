var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      R.call(e, o) && a(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/Waveform.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(n, f(t({ ref: e }, r), { weights: v })));
w.displayName = "Waveform";
export {
  w as Waveform
};
