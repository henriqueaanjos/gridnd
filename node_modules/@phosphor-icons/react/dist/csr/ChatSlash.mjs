var f = Object.defineProperty, h = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (t, a, e) => a in t ? f(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[a] = e, m = (t, a) => {
  for (var e in a || (a = {}))
    p.call(a, e) && r(t, e, a[e]);
  if (o)
    for (var e of o(a))
      c.call(a, e) && r(t, e, a[e]);
  return t;
}, s = (t, a) => h(t, i(a));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/ChatSlash.mjs";
const C = n((t, a) => /* @__PURE__ */ l.createElement(d, s(m({ ref: a }, t), { weights: w })));
C.displayName = "ChatSlash";
export {
  C as ChatSlash
};
