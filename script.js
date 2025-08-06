function updateClock(){
    const now=new Date();
    const hours=String(now.getHours()).padStart(2,'0');
    const mins=String(now.getMinutes()).padStart(2,'0');
    const secs=String(now.getSeconds()).padStart(2,'0');
    const opts={weekday:'long',year:'numeric',month:'long',day:'numeric'};
    const date=now.toLocaleDateString('en-US',opts);
    document.getElementById('hours').textContent=hours;
    document.getElementById('minutes').textContent=mins;
    document.getElementById('seconds').textContent=secs;
    document.getElementById('date').textContent=date;
}
updateClock();
setInterval(updateClock,1000);