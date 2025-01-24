var i = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var f = (m, e, o) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && f(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && f(m, o, e[o]);
  return m;
}, a = (m, e) => p(m, l(e));
import S, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/ShuffleSimple.mjs";
const u = h((m, e) => /* @__PURE__ */ S.createElement(n, a(t({ ref: e }, m), { weights: d })));
u.displayName = "ShuffleSimple";
export {
  u as ShuffleSimple
};
