var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    l.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      n.call(t, o) && m(e, o, t[o]);
  return e;
}, i = (e, t) => p(e, s(t));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import u from "../defs/DotOutline.mjs";
const w = R((e, t) => /* @__PURE__ */ c.createElement(d, i(a({ ref: t }, e), { weights: u })));
w.displayName = "DotOutline";
export {
  w as DotOutline
};
