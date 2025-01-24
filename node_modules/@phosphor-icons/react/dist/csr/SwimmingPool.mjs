var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (m, o, e) => o in m ? f(m, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : m[o] = e, t = (m, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && i(m, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && i(m, e, o[e]);
  return m;
}, a = (m, o) => n(m, p(o));
import l, { forwardRef as w } from "react";
import g from "../lib/IconBase.mjs";
import d from "../defs/SwimmingPool.mjs";
const I = w((m, o) => /* @__PURE__ */ l.createElement(g, a(t({ ref: o }, m), { weights: d })));
I.displayName = "SwimmingPool";
export {
  I as SwimmingPool
};
