var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    n.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      S.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => s(t, f(o));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Signpost.mjs";
const l = g((t, o) => /* @__PURE__ */ c.createElement(R, i(a({ ref: o }, t), { weights: d })));
l.displayName = "Signpost";
export {
  l as Signpost
};
