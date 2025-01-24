var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && m(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import h, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BluetoothX.mjs";
const n = B((t, o) => /* @__PURE__ */ h.createElement(R, f(a({ ref: o }, t), { weights: d })));
n.displayName = "BluetoothX";
export {
  n as BluetoothX
};
