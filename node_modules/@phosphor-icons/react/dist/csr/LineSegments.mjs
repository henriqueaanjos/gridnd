var n = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (t, e, m) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, a = (t, e) => {
  for (var m in e || (e = {}))
    p.call(e, m) && r(t, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && r(t, m, e[m]);
  return t;
}, i = (t, e) => s(t, f(e));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/LineSegments.mjs";
const I = d((t, e) => /* @__PURE__ */ g.createElement(l, i(a({ ref: e }, t), { weights: w })));
I.displayName = "LineSegments";
export {
  I as LineSegments
};
