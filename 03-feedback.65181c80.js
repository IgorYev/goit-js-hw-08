function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(O,t),l?b(e):a}function E(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function O(){var e=m();if(E(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?p(n,i-(e-c)):n}(e))}function T(e){return u=void 0,v&&o?b(e):(o=r=void 0,a)}function x(){var e=m(),n=E(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},x.flush=function(){return void 0===u?a:T(m())},x}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")},S=e(t)((()=>{const e=b.input.value,t=b.textarea.value;localStorage.setItem("STORAGE_KEY",JSON.stringify({email:e,message:t}))}),500);b.form.addEventListener("submit",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("STORAGE_KEY"));console.log(t),localStorage.removeItem("STORAGE_KEY"),b.form.reset()})),b.textarea.addEventListener("input",S),b.input.addEventListener("input",S),function(){const e=localStorage.getItem("STORAGE_KEY");if(e){const t=JSON.parse(e);b.input.value=t.email,b.textarea.value=t.message}}();
//# sourceMappingURL=03-feedback.65181c80.js.map
