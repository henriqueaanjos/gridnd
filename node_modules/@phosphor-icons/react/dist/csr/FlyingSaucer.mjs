var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      s.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, n(e));
import l, { forwardRef as g } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/FlyingSaucer.mjs";
const u = g((r, e) => /* @__PURE__ */ l.createElement(y, i(m({ ref: e }, r), { weights: d })));
u.displayName = "FlyingSaucer";
export {
  u as FlyingSaucer
};
