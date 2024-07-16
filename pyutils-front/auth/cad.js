
async function cadastro(){
    r = await fetch(
        "http://127.0.0.1:8000/auth/cadastro/",{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'username':'isaac',
                'email':'sapoalado',
                'password':'3'
            })
        }).then(response => response.json()).then(dado => {return dado})

    console.log(r)
    
        
}
async function login(){
    r = await fetch(
        "http://127.0.0.1:8000/auth/login/",{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'username':'isaac',
                'email':'sapo070@gmail.com',
                'password':'senha'
            })
        }).then(response => response.json()).then(dado => {return dado})
    
    setCookie('user',r.user)
    setCookie('token',('token' + r.access_token))
    console.log(r)
}



async function get(){
    r = await fetch(
        "http://127.0.0.1:8000/api/tarefa/3",{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                Authorization: 'Token 3826fa564ee8cca470763c9bc232de11c972a80c'
            }
        }).then(response => response.json()).then(dado => {return dado})
    
    console.log(r)
        
}
async function post(){
    r = await fetch(
        "http://127.0.0.1:8000/api/tarefa/1",{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                Authorization: 'Token 3826fa564ee8cca470763c9bc232de11c972a80c'
            },
            body:JSON.stringify({
                'tarefa':'programar',
                'feito':true,
                'user':'3'
            })
        }).then(response => response.json()).then(dado => {return dado})
    
    console.log(r)
}


function setCookie(nome,valor,dias=null) {
    var validade = "";
    if (dias) {
        var date = new Date();
        date.setTime(date.getTime() + (dias*24*60*60*1000));
        validade = ", expires=" + date.toUTCString();
    }
    document.cookie = nome + "=" + (valor || "")  + validade + "; path=/";
}

function getCookie(nome) {
    var nomeCookie = nome + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nomeCookie) == 0) return c.substring(nomeCookie.length,c.length);
    }
    return null;
}

function eraseCookie(nome) {   
    document.cookie = nome +'=; Path=/; Expires=Thu; 01 Jan 1970 00:00:01 GMT;';
}