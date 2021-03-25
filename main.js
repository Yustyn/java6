let $paragraph = document.getElementById('par')
let $btn = document.querySelectorAll('button')

for(let i = 0; i < $btn.length; i++){
    $btn[i].addEventListener('click', function() {
        $paragraph.style.padding = "20px"
        switch (i){
            case 0:
                format('#F1FFF2', 'black', '5px', 'double', '#6E7494', 'italic')
                $paragraph.style.borderWidth = '7px'
                break
            case 1:
                format('#FFE4E1','#5F4A65','5px', 'dotted', '#493B91', 'italic')
                $paragraph.style.borderRadius= '1px'
                break
            case 2: 
                format('#D3D3D3','#4C605B','7px', 'dashed', '#696969', 'italic')
                $paragraph.style.borderTopRightRadius = '20px'
                $paragraph.style.borderBottomRightRadius = '20px'
                break
            case 3: 
                format('#483D8B','#3891D4','7px', 'solid', '#1A196B', 'italic')
                $paragraph.style.borderTopLeftRadius = '20px'
                $paragraph.style.borderBottomRightRadius = '20px'
                $paragraph.style.borderRightColor = "#05061B"
                $paragraph.style.borderBottomColor = "#05061B"
                $paragraph.style.fontWeight = 'bold'
                break
        }
    })
}

function format(bgColor, textColor, borderWidth, borderStyle, borderColor, textFontStyle){
                $paragraph.style.backgroundColor = bgColor
                $paragraph.style.color = textColor
                $paragraph.style.borderRadius = '3px'
                $paragraph.style.border = borderWidth + ' ' + borderStyle + ' ' + borderColor
                $paragraph.style.fontStyle = textFontStyle
}


// 1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них.

wrapper = document.querySelector('.wrapper')
wrapper1 = document.querySelector('.wrapper1')

function what_is_bigger(number1, number2) {
    if (number1 > number2) {
        return number1 + " is bigger than " + number2
    } else if (number1 < number2) {
        return number2  + " is bigger than " + number1
    } else if (number1 == number2) {
        return  number1 + " and " + number2 + " are same"
    } else {
        return number1 + ', ' + number2 + ' - ' + "one element is NaN"
    }
}

let z1 = document.createElement('p')
z1.textContent = "1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них: " + what_is_bigger('5',3) + '; '  + what_is_bigger(0,3) + '; '  + what_is_bigger(0,'0') + '; '  + what_is_bigger('as',3)

wrapper.insertAdjacentElement('beforeend', z1)


// 2. Написать функцию, которая возводит переданное число в указанную степень.

function step(number, st) {
    if (st == 1) return number
    return (step(number, st - 1) * number) 
    // + " is a " + number + "^" + st
}

let z2 = document.createElement('p')
z2.textContent = "2. Написать функцию, которая возводит переданное число в указанную степень: 2^3: " + step(2, 3)
+ " 3^4: " + step(3, 4) + " 3^3: " + step(3, 3)

wrapper1.insertAdjacentElement('beforeend', z2)
