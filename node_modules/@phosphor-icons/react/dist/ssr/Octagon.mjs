var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      n.call(o, e) && a(t, e, o[e]);
  return t;
}, c = (t, o) => i(t, p(o));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Octagon.mjs";
const w = R((t, o) => /* @__PURE__ */ g.createElement(d, c(m({ ref: o }, t), { weights: l })));
w.displayName = "Octagon";
export {
  w as Octagon
};
