var f = Object.defineProperty, h = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      d.call(e, r) && o(t, r, e[r]);
  return t;
}, s = (t, e) => h(t, i(e));
import l, { forwardRef as n } from "react";
import C from "../lib/SSRBase.mjs";
import S from "../defs/ChatCenteredSlash.mjs";
const c = n((t, e) => /* @__PURE__ */ l.createElement(C, s(m({ ref: e }, t), { weights: S })));
c.displayName = "ChatCenteredSlash";
export {
  c as ChatCenteredSlash
};
