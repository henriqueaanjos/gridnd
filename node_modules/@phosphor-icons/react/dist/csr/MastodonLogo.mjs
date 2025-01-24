var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && a(t, e, o[e]);
  return t;
}, s = (t, o) => i(t, n(o));
import d, { forwardRef as g } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/MastodonLogo.mjs";
const I = g((t, o) => /* @__PURE__ */ d.createElement(l, s(m({ ref: o }, t), { weights: w })));
I.displayName = "MastodonLogo";
export {
  I as MastodonLogo
};
