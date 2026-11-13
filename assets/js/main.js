document.addEventListener('DOMContentLoaded',()=>{
const showDateTime=()=>{const now=new Date(),date=now.toLocaleString(undefined,{dateStyle:'medium',timeStyle:'short'});document.querySelectorAll('[data-current-time]').forEach(el=>el.textContent=date);document.querySelectorAll('[data-year]').forEach(el=>el.textContent=now.getFullYear())};
showDateTime();
setInterval(showDateTime,60000);
});
