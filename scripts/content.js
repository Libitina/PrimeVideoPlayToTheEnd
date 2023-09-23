    var config = {
        childList: true,//「子ノード（テキストノードも含む）」の変化
        attributes: true,//「属性」の変化
        characterData: true,//「テキストノード」の変化
        subtree: true, //対象ノードとその子孫ノードに対する変更の監視を有効に
    };

    var watcher1 = false;
    var watcher2 = false;

    function body_mutation(record, body_observer) {
        if (!watcher1){
            var cards = document.getElementsByClassName('atvwebplayersdk-nextupcard-wrapper');
            if (cards.length > 0){
                var element = cards[0];
                var mo_card = new MutationObserver(function(record, observer) {
                    var btns = document.getElementsByClassName('atvwebplayersdk-nextupcardhide-button');
                    if (btns.length > 0){
                        btns[0].click();
                    }
                });
                //監視の開始
                mo_card.observe(element, config);
                watcher1 = true;
            }
        }
        if (!watcher2){
            // プロモーションスキップ
            var infobars = document.getElementsByClassName('atvwebplayersdk-infobar-container');
            if (infobars.length > 0){
                var infobar = infobars[0];
                var mo_infobar = new MutationObserver(function(record, observer) {
                    var divs = document.getElementsByClassName('fu4rd6c');
                    if (divs.length > 0){
                        divs[0].click();
                    }
                });
                //監視の開始
                mo_infobar.observe(infobar, config);
                watcher2 = true;
            }
        }
        if (watcher1 && watcher2){
            body_observer.disconnect();
        }
    }

    var body_elements = document.getElementsByTagName('body');
    var mo_body = new MutationObserver(body_mutation);
    mo_body.observe(body_elements[0], config);
