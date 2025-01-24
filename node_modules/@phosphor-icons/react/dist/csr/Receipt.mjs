var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      R.call(e, o) && m(t, o, e[o]);
  return t;
}, i = (t, e) => c(t, f(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Receipt.mjs";
const I = d((t, e) => /* @__PURE__ */ n.createElement(l, i(a({ ref: e }, t), { weights: w })));
I.displayName = "Receipt";
export {
  I as Receipt
};
