var i = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (t, o, r) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, a = (t, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && m(t, r, o[r]);
  if (e)
    for (var r of e(o))
      l.call(o, r) && m(t, r, o[r]);
  return t;
}, f = (t, o) => s(t, c(o));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/MicrosoftOutlookLogo.mjs";
const u = n((t, o) => /* @__PURE__ */ g.createElement(d, f(a({ ref: o }, t), { weights: k })));
u.displayName = "MicrosoftOutlookLogo";
export {
  u as MicrosoftOutlookLogo
};
