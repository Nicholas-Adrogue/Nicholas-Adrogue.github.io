function opn(evt, nm) {
    // Variables
    var i, tabcontent, tablinks
    // Hide content with class "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display="none";
    }
    // Make "tablinks" inactive
    tablinks = getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show and activate the current tab
    document.getElementById(nm).style.display="block";
    evt.currentTarget.className += " active";

    // Open a tab by default
    document.getElementById("defaultOpen").click();
}