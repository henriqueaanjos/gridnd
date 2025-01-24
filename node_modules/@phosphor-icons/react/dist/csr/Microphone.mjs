var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      s.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => c(e, f(o));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Microphone.mjs";
const I = d((e, o) => /* @__PURE__ */ h.createElement(l, i(a({ ref: o }, e), { weights: w })));
I.displayName = "Microphone";
export {
  I as Microphone
};
