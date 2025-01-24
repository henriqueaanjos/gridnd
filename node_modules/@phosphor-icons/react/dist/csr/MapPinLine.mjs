var n = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && i(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && i(o, r, e[r]);
  return o;
}, m = (o, e) => p(o, f(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/MapPinLine.mjs";
const L = l((o, e) => /* @__PURE__ */ d.createElement(w, m(t({ ref: e }, o), { weights: I })));
L.displayName = "MapPinLine";
export {
  L as MapPinLine
};
