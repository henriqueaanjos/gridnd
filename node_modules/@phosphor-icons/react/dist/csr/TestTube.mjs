var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      T.call(e, o) && m(t, o, e[o]);
  return t;
}, s = (t, e) => i(t, p(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/TestTube.mjs";
const u = b((t, e) => /* @__PURE__ */ n.createElement(d, s(a({ ref: e }, t), { weights: l })));
u.displayName = "TestTube";
export {
  u as TestTube
};
