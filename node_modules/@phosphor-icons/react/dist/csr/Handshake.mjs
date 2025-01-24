var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (a, e, o) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, m = (a, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(a, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && t(a, o, e[o]);
  return a;
}, s = (a, e) => i(a, n(e));
import d, { forwardRef as h } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/Handshake.mjs";
const w = h((a, e) => /* @__PURE__ */ d.createElement(k, s(m({ ref: e }, a), { weights: l })));
w.displayName = "Handshake";
export {
  w as Handshake
};
