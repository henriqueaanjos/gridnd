var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      l.call(o, e) && a(t, e, o[e]);
  return t;
}, i = (t, o) => p(t, s(o));
import g, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/GitlabLogo.mjs";
const w = n((t, o) => /* @__PURE__ */ g.createElement(b, i(m({ ref: o }, t), { weights: d })));
w.displayName = "GitlabLogo";
export {
  w as GitlabLogo
};
