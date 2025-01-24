var t = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? t(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, i = (m, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      h.call(e, o) && a(m, o, e[o]);
  return m;
}, s = (m, e) => p(m, l(e));
import n, { forwardRef as c } from "react";
import P from "../lib/IconBase.mjs";
import S from "../defs/PushPinSimpleSlash.mjs";
const d = c((m, e) => /* @__PURE__ */ n.createElement(P, s(i({ ref: e }, m), { weights: S })));
d.displayName = "PushPinSimpleSlash";
export {
  d as PushPinSimpleSlash
};
