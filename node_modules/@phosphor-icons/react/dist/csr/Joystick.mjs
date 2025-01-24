var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? s(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      n.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => c(t, f(o));
import y, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/Joystick.mjs";
const w = d((t, o) => /* @__PURE__ */ y.createElement(k, i(a({ ref: o }, t), { weights: l })));
w.displayName = "Joystick";
export {
  w as Joystick
};
