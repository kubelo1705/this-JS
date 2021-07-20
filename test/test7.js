const ho = 'Duc';
const ten = 'Thanh';

const Person = {
    ho: 'Nguyen',
    ten: 'Tam',
    ghepHoTen: function() {
        console.log(this.ho + ' ' + this.ten);
    }
}

// in kết quả kiểm tra context của this trong function ghepHoTen
Person.ghepHoTen();
// gán function ghepHoTen cho 1 variable
const PersonA = Person.ghepHoTen;
// context đã bị thay đổi, mình cần là kết quả 'Nguyen Tam'
PersonA();