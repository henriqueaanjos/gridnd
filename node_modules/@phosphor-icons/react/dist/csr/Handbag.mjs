var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    s.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      c.call(a, o) && t(e, o, a[o]);
  return e;
}, f = (e, a) => n(e, p(a));
import d, { forwardRef as g } from "react";
import b from "../lib/IconBase.mjs";
import l from "../defs/Handbag.mjs";
const w = g((e, a) => /* @__PURE__ */ d.createElement(b, f(m({ ref: a }, e), { weights: l })));
w.displayName = "Handbag";
export {
  w as Handbag
};
