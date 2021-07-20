const PersonA = {
    ho: 'Nguyen',
    ten: 'Tam',
    ghepHoTen: function() {
        console.log(this.ho + ' ' + this.ten);
    }
}

const PersonB = {
    ho: 'Đức',
    ten: 'Trọng'
}


// "Ngữ cảnh", khi chúng ta gọi ghepHoTen là đối tượng personA
// khi chúng ta gọi ghepHoTen cho đối tượng này.  Và "this" trong
// function này sẽ có giá trị của đối tượng personA.
console.log(PersonA.ghepHoTen());

// Chúng ta có thể sử dụng function apply để gán giá trị "this" một cách rõ ràng hơn 
// trong function apply, "this" sẽ có giá trị của bất cứ thứ gì gọi functon this.  Vì thế:
console.log(PersonA.ghepHoTen.apply(PersonB));

// Lưu ý mặc dù trông thì có vẻ như Object PersonA gọi functon ghepHoTen
// Nhưng do dùng method apply rồi, nên về thực tế là nó đã chuyển sang gọi thông qua object PersonB