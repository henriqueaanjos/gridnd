var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    n.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => s(t, f(o));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Signpost.mjs";
const I = d((t, o) => /* @__PURE__ */ g.createElement(l, i(a({ ref: o }, t), { weights: w })));
I.displayName = "Signpost";
export {
  I as Signpost
};
