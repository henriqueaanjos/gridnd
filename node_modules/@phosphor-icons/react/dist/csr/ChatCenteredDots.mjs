var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(t, o, e[o]);
  return t;
}, s = (t, e) => i(t, n(e));
import d, { forwardRef as C } from "react";
import h from "../lib/IconBase.mjs";
import l from "../defs/ChatCenteredDots.mjs";
const w = C((t, e) => /* @__PURE__ */ d.createElement(h, s(m({ ref: e }, t), { weights: l })));
w.displayName = "ChatCenteredDots";
export {
  w as ChatCenteredDots
};
