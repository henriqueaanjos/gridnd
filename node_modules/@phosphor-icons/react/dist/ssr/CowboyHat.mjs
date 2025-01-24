var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    w.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && a(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import y, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/CowboyHat.mjs";
const l = R((t, o) => /* @__PURE__ */ y.createElement(b, f(m({ ref: o }, t), { weights: d })));
l.displayName = "CowboyHat";
export {
  l as CowboyHat
};
