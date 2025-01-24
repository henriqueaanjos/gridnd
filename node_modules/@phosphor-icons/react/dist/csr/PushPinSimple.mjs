var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (m, e, o) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && i(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && i(m, o, e[o]);
  return m;
}, a = (m, e) => s(m, f(e));
import l, { forwardRef as P } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/PushPinSimple.mjs";
const u = P((m, e) => /* @__PURE__ */ l.createElement(h, a(t({ ref: e }, m), { weights: d })));
u.displayName = "PushPinSimple";
export {
  u as PushPinSimple
};
