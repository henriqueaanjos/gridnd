var n = Object.defineProperty, s = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => s(r, i(e));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/PhoneTransfer.mjs";
const I = d((r, e) => /* @__PURE__ */ h.createElement(l, f(m({ ref: e }, r), { weights: w })));
I.displayName = "PhoneTransfer";
export {
  I as PhoneTransfer
};
