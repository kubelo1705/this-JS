var person = {
    firstName: 'Khoa',
    lastName: 'Nguyen',
    showName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

//Ở đây this sẽ là object person
person.showName(); //Khoa Nguyen