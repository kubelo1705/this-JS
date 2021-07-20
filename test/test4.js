var firstName = "Nhung",
    lastName = "Nguyễn Hồng";

function showFullName() {
    // Lưu ý: Đây là 1 hàm được định nghĩa trong môi trường global, cùng môi trường với variables "firstName" và "lastName".
    // Do đó, "this" ở trong dây sẽ trỏ (và mang giá trị) của object "window"
    console.log(this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Hà",
    lastName: "Trần Thu",

    showFullName: function() {
        // Lưu ý: Đây là 1 hàm được định nghĩa trong 1 object (tên là "person")
        // object "person" này sẽ gọi hàm "showFullName" khi có nhu cầu
        // do đó, "this" ở trong đây sẽ trỏ và mang giá trị của object "person" 
        // chứ ko phải object "window" như ở trên. 
        console.log(this.firstName + " " + this.lastName);
    }
}

showFullName(); // Nhung Nguyễn Hồng

// this hay window đều được, mình có giải thích ở trên rồi nhé.
this.showFullName(); // Nhung Nguyễn Hồng

person.showFullName(); // Hà Trần Thu