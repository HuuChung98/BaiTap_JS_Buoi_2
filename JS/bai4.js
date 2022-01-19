// Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
// • Ví dụ: a=2, b=2, c=1 => Tam giác cân
// • a = 3, b=3 c=3 => Tam giác đều
// • a = 3, b = 4, c=5 => Tam giác vuông (đinh lý Pytago)

// Hàm xác định tam giác
function triangular(edgeA, edgeB, edgeC, textEl) {
    const eps = Math.pow(0.1, 10);
    console.log(eps);
    if(edgeA > 0 && edgeB > 0 && edgeC > 0 && edgeA + edgeB > edgeC && edgeA + edgeC > edgeB && edgeB + edgeC > edgeA)
    {
        let f = 0;
        if(edgeA == edgeB || edgeB == edgeC || edgeC == edgeA)
        {
            f += 1;
        }
        if(edgeA == edgeB && edgeB == edgeC)
        {
            f += 1;
        }
        if(Math.abs(edgeA * edgeA + edgeB * edgeB - edgeC * edgeC) < eps || Math.abs(edgeA * edgeA + edgeC * edgeC - edgeB * edgeB) < eps || Math.abs(edgeB * edgeB + edgeC * edgeC - edgeA * edgeA) < eps)
        {
            f += 3;
        }
        switch(f)
        {
            case 0:
            {
                textEl.innerHTML = `TAM GIÁC THƯỜNG`;
                // document.write("Tam giac thuong");
                break;
            }
            case 1:
            {
                textEl.innerHTML = `TAM GIÁC CÂN`;
                // document.write("Tam giac can");
                break;
            }
            case 2:
            {
                textEl.innerHTML = `TAM GIÁC ĐỀU`;
                // document.write("Tam giac deu");
                break;
            }
            case 3:
            {
                textEl.innerHTML = `TAM GIÁC VUÔNG`;
                // document.write("Tam giac vuong");
                break;
            }
            case 4:
                {
                    textEl.innerHTML = `TAM GIÁC VUÔNG CÂN`;
                    // document.write("Tam giac vuong can");
                }
        }
    }
    else
    {
        textEl.innerHTML = `Khong hop le`;
        // document.write("Khong hop le");
    }
}


document.getElementById("getEdge").onsubmit = function (evt) {
    evt.preventDefault();

    // Lấy các cạnh của tam giác là giá trị lấy được từ form
    const edgeA = +evt.target.elements.edge__a.value;
    const edgeB = +evt.target.elements.edge__b.value;
    const edgeC = +evt.target.elements.edge__c.value;

    const textEl = document.getElementById("text__trian");
    const triangle__guess = document.getElementById("triangle-guess");

    // hàm xác định có phải tam giác hay không
    triangular(edgeA, edgeB, edgeC, textEl);
    // đưa ra KQ 
    triangle__guess.style.display = "block";

}

