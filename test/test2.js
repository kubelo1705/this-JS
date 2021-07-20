const Person = {
        ho: 'Nguyen',
        ten: 'Tam',
        ghepHoTen: function() {
            console.log('Họ và tên', this.ho + " " + this.ten);
        }
    }
    // cái này mình không biết lấy ví dụ thế nào để dễ hiểu hơn, nhưng nó như thế này.
    // Person không gọi method ghepHoTen, các bạn console.log sẽ cho ra kết quả.
console.log(Person)