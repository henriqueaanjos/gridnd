var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => l(o, f(e));
import d, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import b from "../defs/ChalkboardSimple.mjs";
const k = h((o, e) => /* @__PURE__ */ d.createElement(n, i(t({ ref: e }, o), { weights: b })));
k.displayName = "ChalkboardSimple";
export {
  k as ChalkboardSimple
};
