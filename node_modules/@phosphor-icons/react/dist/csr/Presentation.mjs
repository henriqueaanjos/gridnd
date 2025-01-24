var n = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(t, o, e[o]);
  return t;
}, i = (t, e) => s(t, f(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Presentation.mjs";
const P = l((t, e) => /* @__PURE__ */ d.createElement(w, i(m({ ref: e }, t), { weights: I })));
P.displayName = "Presentation";
export {
  P as Presentation
};
