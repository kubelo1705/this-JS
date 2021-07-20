const Person = {
    ten: 'Tam',
    tuoi: [20, 21, 22, 23, 24, 25],
    ghepHoTen: function() {
        var that = this;
        this.tuoi.forEach(function(value) {
            // trong này là 1 anonymous function được lồng trong 1 function,
            // do vậy nó không truy cập được this của function bên ngooài.
            console.log(that.ten + ' ' + value);
        })
    }
}

Person.ghepHoTen();