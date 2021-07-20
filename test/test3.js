const Person = {
    ho: 'Nguyen',
    ten: 'Tam',
    ghepHoTen: function() {
        // mình sử dụng cách bình thường để lấy value trong 1 Object
        // tên Object toán tử '.' rồi đến name của object cần lấy value
        console.log('Họ và tên', Person.ho + " " + Person.ten);

        // Mình sử dụng con trỏ this, tương tự như việc dùng he/anh ấy 
        console.log('Họ và tên', this.ho + " " + this.ten);

    }
}
Person.ghepHoTen();