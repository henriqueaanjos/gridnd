var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && m(t, o, e[o]);
  return t;
}, i = (t, e) => f(t, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/FilePpt.mjs";
const I = d((t, e) => /* @__PURE__ */ n.createElement(w, i(a({ ref: e }, t), { weights: F })));
I.displayName = "FilePpt";
export {
  I as FilePpt
};
