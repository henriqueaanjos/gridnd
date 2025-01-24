var s = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? s(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    L.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      c.call(o, e) && r(t, e, o[e]);
  return t;
}, f = (t, o) => i(t, p(o));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/LastfmLogo.mjs";
const n = R((t, o) => /* @__PURE__ */ g.createElement(d, f(a({ ref: o }, t), { weights: l })));
n.displayName = "LastfmLogo";
export {
  n as LastfmLogo
};
