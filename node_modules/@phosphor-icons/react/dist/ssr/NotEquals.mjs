var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && a(t, e, o[e]);
  return t;
}, s = (t, o) => i(t, p(o));
import E, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/NotEquals.mjs";
const n = N((t, o) => /* @__PURE__ */ E.createElement(R, s(m({ ref: o }, t), { weights: d })));
n.displayName = "NotEquals";
export {
  n as NotEquals
};
