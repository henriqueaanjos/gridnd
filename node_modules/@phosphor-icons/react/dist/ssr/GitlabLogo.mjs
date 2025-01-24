var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && a(t, e, o[e]);
  return t;
}, i = (t, o) => p(t, s(o));
import g, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/GitlabLogo.mjs";
const n = R((t, o) => /* @__PURE__ */ g.createElement(b, i(m({ ref: o }, t), { weights: d })));
n.displayName = "GitlabLogo";
export {
  n as GitlabLogo
};
