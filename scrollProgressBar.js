window.addEventListener('scroll', function() {
    let scrollBottom = document.body.scrollHeight - document.body.scrollTop - document.body.clientHeight;
    console.log(scrollBottom+document.body.scrollTop+document.body.clientHeight);
    console.log(document.body.offsetHeight);
    console.log(document.body.scrollTop);
    console.log(document.body.clientHeight);
    let progressValue = Math.round((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)/(document.documentElement.offsetHeight-document.documentElement.clientHeight)*100);
    console.log(progressValue);
    document.getElementById('progressbar').setAttribute('value',`${progressValue}`);
});
