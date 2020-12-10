    // Apply the language settings once the page is loaded
    document.addEventListener('DOMContentLoaded', () => {      
               applyStrings();
               console.log("DOMContentLoaded");
/*               
               let lang = findLocaleMatch();
               console.log("lang: " + lang);
               let container = document.querySelector(`html [lang*=${lang}]`);
       
               container.className = "lang-match";
*/               
           });
       
           // Apply the settings to ALL Div with "lang="
           function applyStrings() {
            let containers = document.querySelectorAll('html [lang]');
               containers.forEach(container => {
                   // Find all element that have lang-key
                   let locale = container.getAttribute('lang');
                   container.querySelectorAll(`[lang-key]`).forEach(element => {
                       let key = element.getAttribute('lang-key');
                    //   console.log("element: " + element);
                    //   console.log("key: " + key);
                       let lang = locale.substr(0,2);
                       if (key) { 
                           //  set the text with selected language
                           element.textContent = langdata.languages[lang].strings[key];
                       }
                   });
               })
           }

               function SwitchToEn () {
               console.log("en");
               $("div").attr("lang", "en");
               applyStrings();
           }

           function SwitchToSe () { 
               console.log("sv");
               $("div").attr("lang", "sv");
               applyStrings();
           }


       