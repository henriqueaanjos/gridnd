var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    n.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => p(t, s(o));
import g, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/NotionLogo.mjs";
const l = N((t, o) => /* @__PURE__ */ g.createElement(R, i(a({ ref: o }, t), { weights: d })));
l.displayName = "NotionLogo";
export {
  l as NotionLogo
};
