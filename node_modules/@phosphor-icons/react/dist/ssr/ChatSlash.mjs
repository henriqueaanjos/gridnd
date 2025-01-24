var f = Object.defineProperty, h = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (t, a, e) => a in t ? f(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[a] = e, m = (t, a) => {
  for (var e in a || (a = {}))
    p.call(a, e) && o(t, e, a[e]);
  if (r)
    for (var e of r(a))
      l.call(a, e) && o(t, e, a[e]);
  return t;
}, s = (t, a) => h(t, i(a));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ChatSlash.mjs";
const n = c((t, a) => /* @__PURE__ */ S.createElement(R, s(m({ ref: a }, t), { weights: d })));
n.displayName = "ChatSlash";
export {
  n as ChatSlash
};
