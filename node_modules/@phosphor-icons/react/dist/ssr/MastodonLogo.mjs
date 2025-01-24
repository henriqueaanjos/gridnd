var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    d.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      n.call(o, e) && a(t, e, o[e]);
  return t;
}, s = (t, o) => i(t, p(o));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/MastodonLogo.mjs";
const w = g((t, o) => /* @__PURE__ */ c.createElement(R, s(m({ ref: o }, t), { weights: l })));
w.displayName = "MastodonLogo";
export {
  w as MastodonLogo
};
