var f = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, r = (t, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && i(t, o, e[o]);
  if (a)
    for (var o of a(e))
      p.call(e, o) && i(t, o, e[o]);
  return t;
}, m = (t, e) => n(t, c(e));
import s, { forwardRef as I } from "react";
import g from "../lib/IconBase.mjs";
import B from "../defs/IdentificationBadge.mjs";
const l = I((t, e) => /* @__PURE__ */ s.createElement(g, m(r({ ref: e }, t), { weights: B })));
l.displayName = "IdentificationBadge";
export {
  l as IdentificationBadge
};
