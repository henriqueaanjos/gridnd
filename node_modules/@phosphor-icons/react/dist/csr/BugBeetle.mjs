var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    B.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && m(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, s(e));
import l, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/BugBeetle.mjs";
const u = g((t, e) => /* @__PURE__ */ l.createElement(n, f(a({ ref: e }, t), { weights: d })));
u.displayName = "BugBeetle";
export {
  u as BugBeetle
};
