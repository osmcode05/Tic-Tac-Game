let cares = document.querySelectorAll('.care'),
    nav = document.querySelector('nav'),
    type = 'X';
// add X or O 
cares.forEach(care => {
    care.onclick = ()=> {
        if (type === 'X' && care.innerHTML === '') {
            care.innerHTML = 'X';
            type = 'O';
        } else if (type === 'O' && care.innerHTML === '') {
            care.innerHTML = 'O';
            type = 'X';
        }
        nav.innerHTML = `<span><h1>${type}</h1></span>`;
        winner()
        equal()
    }
});
// select the winner
function end(num1,num2,num3){
        cares[num1].style.background = 'black'
        cares[num2].style.background = 'black'
        cares[num3].style.background = 'black'
        nav.innerHTML = `<h1><span>${cares[num1].innerHTML}</span> wine</h1>`;
        setInterval(()=>{
            nav.innerHTML += `<h1>.</h1>`;
        },500)
        setInterval(()=>{
            location.reload()
        },1600)
}
// search if there are 3 boxs are similar
let arr = []
function winner() {
    for (let i = 0; i < 9 ; i++) {
        arr[i] = cares[i].innerHTML
    }
        if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != ''){
            end(0,1,2)
        }else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != ''){
            end(3,4,5)
        }else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != ''){
            end(6,7,8)
        }else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != ''){
            end(0,3,6)
        }else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != ''){
            end(1,4,7)
        }else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != ''){
            end(2,5,8)
        }else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != ''){
            end(0,4,8)
        }else if (arr[2] == arr[4] && arr[4] == arr[6] && arr[2] != ''){
            end(2,4,6)
        }
}
// equal match
function equal(){
    if (
        (arr[0] !== arr[1] || arr[0] !== arr[2]) &&
        (arr[3] !== arr[4] || arr[3] !== arr[5]) &&
        (arr[6] !== arr[7] || arr[6] !== arr[8]) &&
        (arr[0] !== arr[3] || arr[0] !== arr[6]) &&
        (arr[1] !== arr[4] || arr[1] !== arr[7]) &&
        (arr[2] !== arr[5] || arr[2] !== arr[8]) &&
        (arr[0] !== arr[4] || arr[0] !== arr[8]) &&
        (arr[2] !== arr[4] || arr[2] !== arr[6])
    ) {
        if (
            (arr[0] !== '' && arr[1] !== '' && arr[2] !== '')&&
            (arr[4] !== '' && arr[3] !== '' && arr[5] !== '')&&
            (arr[7] !== '' && arr[6] !== '' && arr[8] !== '')&&
            (arr[0] !== '' && arr[3] !== '' && arr[6] !== '')&&
            (arr[1] !== '' && arr[4] !== '' && arr[7] !== '')&&
            (arr[2] !== '' && arr[5] !== '' && arr[8] !== '')&&
            (arr[0] !== '' && arr[4] !== '' && arr[8] !== '')&&
            (arr[2] !== '' && arr[4] !== '' && arr[6] !== '')
        ) {
            nav.innerHTML = `<span><h3>Equal Match</h3></span>`;
            setInterval(()=>{
                nav.innerHTML += `<span>.</span>`;
            },500)
            setInterval(()=>{
                location.reload()
            },1600)
        }
    }
}
