var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, r) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, a = (t, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && m(t, r, o[r]);
  if (e)
    for (var r of e(o))
      c.call(o, r) && m(t, r, o[r]);
  return t;
}, i = (t, o) => s(t, f(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/Footprints.mjs";
const I = l((t, o) => /* @__PURE__ */ d.createElement(w, i(a({ ref: o }, t), { weights: F })));
I.displayName = "Footprints";
export {
  I as Footprints
};
