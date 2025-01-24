var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      w.call(o, e) && a(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import n, { forwardRef as y } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/CowboyHat.mjs";
const l = y((t, o) => /* @__PURE__ */ n.createElement(b, f(m({ ref: o }, t), { weights: d })));
l.displayName = "CowboyHat";
export {
  l as CowboyHat
};
