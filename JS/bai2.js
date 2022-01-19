// Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ
// hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia
// đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)



function greeting(getnameEl, gettreeEl, chaohoiEl) {
    if(getnameEl == "Bố" || getnameEl == "Mẹ")
    {
        // document.write("Dạ xin chào " + askUser + nameUser);
        chaohoiEl.innerHTML = `Dạ xin chao ${gettreeEl} ${getnameEl}`;

    }
    else(getnameEl == "anh" || getnameEl == "chị" || getnameEl == "em gái" || getnameEl == "em trai")
    {
        // document.write("Xin chao bạn " + nameUser);
        chaohoiEl.innerHTML = `Xin chao bạn ${getnameEl}`;
    } 

};
document.getElementById("getInfor").onsubmit = function(evt) {
    evt.preventDefault();
    const getnameEl = evt.target.elements.getName.value;
    const gettreeEl = evt.target.elements.getTree.value;

    const chaohoiEl = document.getElementById("chaohoi");
    const greetingEl = document.getElementById("greeting");
    greeting(getnameEl, gettreeEl, chaohoiEl);
    greetingEl.style.display = "block";

}