var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, s = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      l.call(o, e) && r(t, e, o[e]);
  return t;
}, a = (t, o) => i(t, p(o));
import w, { forwardRef as R } from "react";
import n from "../lib/IconBase.mjs";
import B from "../defs/RowsPlusBottom.mjs";
const d = R((t, o) => /* @__PURE__ */ w.createElement(n, a(s({ ref: o }, t), { weights: B })));
d.displayName = "RowsPlusBottom";
export {
  d as RowsPlusBottom
};
