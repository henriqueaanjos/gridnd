var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && a(t, o, e[o]);
  return t;
}, c = (t, e) => i(t, n(e));
import l, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import d from "../defs/Rectangle.mjs";
const w = R((t, e) => /* @__PURE__ */ l.createElement(g, c(m({ ref: e }, t), { weights: d })));
w.displayName = "Rectangle";
export {
  w as Rectangle
};
