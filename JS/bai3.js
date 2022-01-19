// Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.

// let a, b, c;
// a = +prompt("nhập vào số a: ", a);
// b = +prompt("nhập vào số b: ", b);
// c = +prompt("nhập vào số c: ", c);

// let data = [a,b,c];
// console.log(data);
// // console.log(length.data);
// let count = 0;

// for(let i = 0; i < data.length; i++)
// {
    
//     if(+data[i] % 2 == 0)
//     {
//         count += 1;
//     }

// }
// let soLe = data.length - count;
// document.write("Có ", count + " số chẳn và " + soLe + " số lẻ");

function run(Num__aEl, Num__bEl, Num__cEl, numEl) {
    let data = [Num__aEl, Num__bEl, Num__cEl];
    console.log(data);
// console.log(length.data);
    let count = 0;

    for(let i = 0; i < data.length; i++)
    {
    
        if(+data[i] % 2 == 0)
        {
            count += 1;
        }

    }
    let oddNum = data.length - count;
    numEl.innerHTML = `Có ${count} số chẳn và ${oddNum} số lẻ`;
    // document.write("Có ", count + " số chẳn và " + soLe + " số lẻ");
    }
document.getElementById("getNum").onsubmit = function (evt) {
    evt.preventDefault();
    const Num__aEl = evt.target.elements.Num__a.value;
    const Num__bEl = evt.target.elements.Num__b.value;
    const Num__cEl = evt.target.elements.Num__c.value;

    const numEl = document.getElementById("num");
    run(Num__aEl, Num__bEl, Num__cEl, numEl);

    const odd__even = document.getElementById("odd-even");
    odd__even.style.display = "block";
}