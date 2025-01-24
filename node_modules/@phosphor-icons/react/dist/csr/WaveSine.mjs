var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => n(o, p(e));
import d, { forwardRef as l } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/WaveSine.mjs";
const I = l((o, e) => /* @__PURE__ */ d.createElement(v, i(m({ ref: e }, o), { weights: w })));
I.displayName = "WaveSine";
export {
  I as WaveSine
};
