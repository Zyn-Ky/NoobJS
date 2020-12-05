function ajaxload(filename, resultcontainerid) {
    if(filename == null && resultcontainerid == null) {
        console.error('[NoobJS]\nError: NoobJS expects 2 parameter given into ajaxload() function null given');
    } else {
        if(filename == "" && resultcontainerid == "") {
            console.error('[NoobJS]\nError: null parameter was given on ajaxload() function null given');
        } else {
            if(!document.querySelector(resultcontainerid)) {
                console.error('[NoobJS]\nError : Unknown element null given');
            } else {
                var xhttpajaxload = new XMLHttpRequest();
                xhttpajaxload.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.querySelector(resultcontainerid).innerHTML =
                        this.responseText;
                    }
                };
                xhttpajaxload.open('GET', filename);
                xhttpajaxload.send();
                xhttpajaxload.onloadend = function() {
                    if(xhttpajaxload.status == 404) {
                        console.error('[NoobJS]\nError: Server responds "File not found" (404)');
                    }
                    if(xhttpajaxload.status == 500) {
                        console.error('[NoobJS]\nError: Server responds "Internal Server Error" (500)');
                    }
                    if(xhttpajaxload.status == 403) {
                        console.error('[NoobJS]\nError: Server responds "Forbidden" (403)');
                    }
                    if(xhttpajaxload.status == 401) {
                        console.error('[NoobJS]\nError: Server responds "Unauthorized" (401)');
                    }
                    if(xhttpajaxload.status == 400) {
                        console.error('[NoobJS]\nError: Server responds "Bad Request" (400)');
                    }
                }
            }
        }
    }
}

function displayToggle(affectedelementselector, displaytype) {
    if(affectedelementselector == null || affectedelementselector == "") {
        console.error('[NoobJS]\nError : NoobJS expected 1 parameter null given');
    } else {
        if(!document.querySelector(affectedelementselector)) {
            console.error('[NoobJS]\nError : Unknown element null given');
        } else {
            if(document.querySelector(affectedelementselector).style.display == "none") {
                document.querySelector(affectedelementselector).style.display == displaytype;
            } else {
                document.querySelector(affectedelementselector).style.display == "none"
            }
        }
    }
}

function lstorage(type, keyname) {
    if(type == "read") {
        if(keyname == "" || keyname == null) {
            console.error('[NoobJS]\nError : Key name is empty null given');
        } else {
            if(localStorage.getItem(keyname) === "undefined" || localStorage.getItem(keyname) == null) {
                console.error('[NoobJS]\nError : Key name is empty / Unknown key was given null given');
            } else {
                localStorage.getItem(keyname);
            }
        }
    }
}

function loadajaxrefresh(filename, resultquery, time) {
    var timeres;
    if(filename == "" && resultquery == "" || filename == null && resultquery == null) {
        console.error('[NoobJS] Expects 2 parameter null given');
    } else {
        if(time == null || time == "") {
            var timeres = "2500";
        } else {
            var timeres = time;
            if(!document.querySelector(resultquery)) {
                console.error('[NoobJS]\nError : Unknown element null given');
            } else {
                    var xhttpajaxload = new XMLHttpRequest();
                    xhttpajaxload.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            return setInterval(function() {
                                return document.querySelector(resultquery).innerHTML = xhttpajaxload.responseText;
                            }, timeres);
                        }
                    };
                    xhttpajaxload.open('GET', filename);
                    xhttpajaxload.send();
                    xhttpajaxload.onloadend = function() {
                        if(xhttpajaxload.status == 404) {
                            console.error('[NoobJS]\nError: Server responds "File not found" (404)');
                        }
                        if(xhttpajaxload.status == 500) {
                            console.error('[NoobJS]\nError: Server responds "Internal Server Error" (500)');
                        }
                        if(xhttpajaxload.status == 403) {
                            console.error('[NoobJS]\nError: Server responds "Forbidden" (403)');
                        }
                        if(xhttpajaxload.status == 401) {
                            console.error('[NoobJS]\nError: Server responds "Unauthorized" (401)');
                        }
                        if(xhttpajaxload.status == 400) {
                            console.error('[NoobJS]\nError: Server responds "Bad Request" (400)');
                        }
                    }
                }
            }
    }
}
