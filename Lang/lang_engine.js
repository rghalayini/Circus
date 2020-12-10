    // Apply the language settings once the page is loaded
    document.addEventListener('DOMContentLoaded', () => {      
               applyStrings();
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
                   // Find all element that have data-key
                   let locale = container.getAttribute('lang');
                   container.querySelectorAll(`[data-key]`).forEach(element => {
                       let key = element.getAttribute('data-key');
                    //   console.log("element: " + element);
                    //   console.log("key: " + key);
                       let lang = locale.substr(0,2);
                       if (key) { 
                           //  set the text with correct language
                           element.textContent = langdata.languages[lang].strings[key];
                       }
                   });
               })
           }
/*       
           function findLocaleMatch() {
               let keys = Object.keys(langdata.languages);
               let locales = Intl.getCanonicalLocales(keys);
               
               let lang = navigator.language;
               let locale = Intl.getCanonicalLocales(keys);
       
               console.log('browser language', lang);
               console.log('locales from data file', locale);
       
               let langMatch = document.documentElement.getAttribute('lang');
               locales = locales.filter(l => locale = l);
               langMatch = (locales.length > 0) ? locales[0] : langMatch;
               return langMatch;
           }
*/       

            $(document).on('click', '#enButton', function( event ) {
                //Do Code here
                //For #one click event
                console.log("en");
            });

           $("#enButton").on("click", function(event) {
               console.log("en");
               $("div").attr("lang", "en");
               applyStrings();
           });

           $("#seButton").on("click", function(event) {
               console.log("sv");
               $("div").attr("lang", "sv");
               applyStrings();
           });


       