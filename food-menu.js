function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) 
                w3AddClass(x[i], "show");
        }
    }

    function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    console.log ("arr1 " + arr1);
    console.log ("2arr2 " + arr2);
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) 
        {element.className += " " + arr2[i];}
        }
    }

    function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
        element.className = arr1.join(" ");
    }

    $(document).ready(function() {
        filterSelection("all");

        $("#allType").click(function() {
            filterSelection('all');
        });
        $("#starterType").click(function() {
            filterSelection('starters');
        });
        $("#mainType").click(function() {
            filterSelection('mains');
        });
        $("#dessertType").click(function() {
            filterSelection('dessert');
        });
    });