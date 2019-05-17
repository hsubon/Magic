(function() {
    
    var start = document.getElementById('start');
    var help = document.getElementById('help');
    var panel = document.getElementById('panel')
    var panel_count = panel.childElementCount;
    var card1 = document.getElementById('card-1');
    var card2 = document.getElementById('card-2');
    var card3 = document.getElementById('card-3');
    var card4 = document.getElementById('card-4');
    var card5 = document.getElementById('card-5');
    var path = card1.src;

    start.addEventListener('click', () => {
        console.log(panel_count);
        // for(let i=0;i<panel;i++) {
            
        // }
        card1.src = card1.src.replace('card0', 'card1');
        card2.src = card2.src.replace('card0', 'card2');
        card3.src = card3.src.replace('card0', 'card3');
        card4.src = card4.src.replace('card0', 'card4');
        card5.src = card5.src.replace('card0', 'card5');
    });

    help.addEventListener('click', function() {
        alert('!!!');
    });

    setTimeout(function() {
        panel.removeChild(card1);
        card2.src = card2.src.replace('card2', 'card6');
        card3.src = card3.src.replace('card3', 'card7');
        card4.src = card4.src.replace('card4', 'card8');
        card5.src = card5.src.replace('card5', 'card9');
    }, 5000);
})();