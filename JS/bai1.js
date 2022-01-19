// Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần

// let n = 3;

// //  Lấy 3 số từ người dùng
// let a , b, c;
// a = +prompt("Nhap so a: ", a);
// // let b;
// b = +prompt("Nhap so b: ", b);
// // let c
// c = +prompt("Nhap so c: ", c);

//     // let maxValue = a;
// if(a < b && a < c)
// {
//     if(c < b)
//     {
//             // maxValue = b;
//         document.write("3 số theo thứ tự tăng dần là: ", a + " " + c + " " + b );
//     }
//     else
//     {
//             // maxValue = c;
//         document.write("3 số theo thứ tự tăng dần là: ", a + " " + b + " " + c);
//     }
//     }
// else
// {
//     if(b > c)
//     {
//         document.write("3 số theo thứ tự tăng dần là: ", c + " " + b + " " + a);
//     }
//     else
//     {
//         document.write("3 số theo thứ tự tăng dần là: ", b + " "  + c + " " + a);
//     }
// } 
function arangeNumber(Num__aEl, Num__bEl, Num__cEl, numEl) {
    if(Num__aEl < Num__bEl && Num__aEl < Num__cEl)
    {
        if(Num__cEl < Num__bEl)
        {
            // maxValue = b;
            // document.write("3 số theo thứ tự tăng dần là: ", Num__aEl + " " + Num__cEl + " " + Num__bEl );
            // return Num__aEl, Num__cEl, Num__bEl;
            numEl.innerHTML = `${Num__aEl} ${Num__cEl} ${Num__bEl}`;
        }
        else
        {
            // maxValue = c;
            // document.write("3 số theo thứ tự tăng dần là: ", Num__aEl + " " + Num__bEl + " " + Num__cEl);
            // return Num__aEl, Num__bEl, Num__cEl
            numEl.innerHTML = `${Num__aEl} ${Num__bEl} ${Num__cEl}`;
        }
    } 
    else if((Num__aEl < Num__bEl && Num__aEl > Num__cEl) || (Num__aEl > Num__bEl && Num__aEl < Num__cEl))
    {
        if(Num__bEl > Num__cEl)
        {
            // document.write("3 số theo thứ tự tăng dần là: ", Num__cEl + " " + Num__bEl + " " + Num__aEl);
            // return Num__cEl, Num__bEl, Num__aEl
            numEl.innerHTML = `${Num__cEl} ${Num__aEl} ${Num__bEl} `;
        }
        else
        {
            // document.write("3 số theo thứ tự tăng dần là: ", Num__bEl + " "  + Num__cEl + " " + Num__aEl);
            // return Num__bEl, Num__cEl, Num__aEl
            numEl.innerHTML = `${Num__bEl} ${Num__aEl} ${Num__cEl} `;
        }
    }
    else
    {

        if(Num__bEl > Num__cEl)
        {
            // document.write("3 số theo thứ tự tăng dần là: ", Num__cEl + " " + Num__bEl + " " + Num__aEl);
            // return Num__cEl, Num__bEl, Num__aEl
            numEl.innerHTML = `${Num__cEl} ${Num__bEl} ${Num__aEl}`;
        }
        else
        {
            // document.write("3 số theo thứ tự tăng dần là: ", Num__bEl + " "  + Num__cEl + " " + Num__aEl);
            // return Num__bEl, Num__cEl, Num__aEl
            numEl.innerHTML = `${Num__bEl} ${Num__cEl} ${Num__aEl}`;
        }
    }    
}
const getNumEl = document.getElementById("getNum");

document.getElementById("getNum").onsubmit = function (evt) {
    evt.preventDefault();
    const Num__aEl = evt.target.elements.Num__a.value;
    const Num__bEl = evt.target.elements.Num__b.value;
    const Num__cEl = evt.target.elements.Num__c.value;

    const numEl = document.getElementById("num");
    const arangeNum = document.getElementById("arangeNum");
    arangeNumber(Num__aEl, Num__bEl, Num__cEl, numEl);

    // numEl.innerHTML = numbers;
    arangeNum.style.display = "block";
}