function gravar(){
    let nome = document.getElementById('nome').value
    console.log(nome)

    let email = document.getElementById('email').value
    console.log(email)

    let res = document.getElementById('res')
    res.style.fontSize = '20px'
    res.style.fontFamily = 'Tahoma'
    res.style.fontWeight = 'bold'
    res.innerHTML = nome

    let res2 = document.getElementById('res2')
    res2.style.fontSize = '20px'
    res2.style.fontFamily = 'Tahoma'
    res2.style.fontWeight = 'bold'
    res2.innerHTML = email
}