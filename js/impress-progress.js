(function (document, window) {
    'use strict';

    var stepids = [];
    // wait for impress.js to be initialized
    document.addEventListener("impress:init", function (event) {
        var steps = event.detail.steps;
        for (var i = 0; i < steps.length; i++) {
            stepids[i + 1] = steps[i].id;
        }
    });
    var progressbar = document.querySelector('div.progressbar div');
    var progress = document.querySelector('div.progress');

    if (null !== progressbar || null !== progress) {
        document.addEventListener("impress:starttransition", function (event) {
            updateProgressbar(event.detail.next.id);
        });

        document.addEventListener("impress:stepenter", function (event) {
            updateProgressbar(event.target.id);
        });
    }

    function English_Numbers_To_Persian(en) {
        var pn = "";
        for (var i = 0; i < en.length; i++) {
            switch (en.charAt(i)) {
                case "0":
                    pn = pn + "۰";
                    break;
                case "1":
                    pn = pn + "۱";
                    break;
                case "2":
                    pn = pn + "۲";
                    break;
                case "3":
                    pn = pn + "۳";
                    break;
                case "4":
                    pn = pn + "۴";
                    break;
                case "5":
                    pn = pn + "۵";
                    break;
                case "6":
                    pn = pn + "۶";
                    break;
                case "7":
                    pn = pn + "۷";
                    break;
                case "8":
                    pn = pn + "۸";
                    break;
                case "9":
                    pn = pn + "۹";
                    break;
                case ",":
                    pn = pn + "٫";
                    break;
                case ".":
                    pn = pn + "/";
                    break;
            }
        }
        return pn;
    }

    function updateProgressbar(slideId) {
        var slideNumber = stepids.indexOf(slideId);
        if (null !== progressbar) {
            progressbar.style.width = (100 / (stepids.length - 1) * (slideNumber)).toFixed(2) + '%';
        }
        if (null !== progress) {
//            progress.innerHTML = slideNumber + '/' + (stepids.length - 1);
            progress.innerHTML = English_Numbers_To_Persian(String(slideNumber)) + ' / ' + English_Numbers_To_Persian(String((stepids.length - 1)));
        }
    }
})(document, window);
