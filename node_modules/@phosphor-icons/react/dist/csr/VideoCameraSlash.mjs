var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, e, o) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, t = (a, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(a, o, e[o]);
  if (r)
    for (var o of r(e))
      d.call(e, o) && m(a, o, e[o]);
  return a;
}, i = (a, e) => f(a, p(e));
import l, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/VideoCameraSlash.mjs";
const C = h((a, e) => /* @__PURE__ */ l.createElement(n, i(t({ ref: e }, a), { weights: w })));
C.displayName = "VideoCameraSlash";
export {
  C as VideoCameraSlash
};
