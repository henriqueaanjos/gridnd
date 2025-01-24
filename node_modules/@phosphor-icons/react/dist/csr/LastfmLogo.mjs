var s = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? s(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      L.call(o, e) && r(t, e, o[e]);
  return t;
}, f = (t, o) => i(t, p(o));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/LastfmLogo.mjs";
const w = n((t, o) => /* @__PURE__ */ g.createElement(d, f(a({ ref: o }, t), { weights: l })));
w.displayName = "LastfmLogo";
export {
  w as LastfmLogo
};
