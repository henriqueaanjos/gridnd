var l = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? l(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    i.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      p.call(o, e) && a(t, e, o[e]);
  return t;
}, s = (t, o) => f(t, h(o));
import c, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BluetoothSlash.mjs";
const u = n((t, o) => /* @__PURE__ */ c.createElement(B, s(m({ ref: o }, t), { weights: d })));
u.displayName = "BluetoothSlash";
export {
  u as BluetoothSlash
};
