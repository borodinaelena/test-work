(function () {
    "use strict";

    angular
        .module('app')
        .controller('PhoneController', PhoneController);

    PhoneController.$inject = [];

    function PhoneController() {
        let vm = this;
        vm.inputNumber = "";
        vm.outputNumber = '';

        vm.formating = function () {
            vm.outputNumber = vm.inputNumber.replace(/[^0-9]/gim, '');
            let mas = vm.outputNumber.split('');
            vm.outputNumber = '';
            let len = getLen(mas.length);
            let index = 0;
            for (let i = 0; i <= len; i++) {
                vm.outputNumber += mas[index] + mas[index + 1] + mas[index + 2] + '-';
                index += 3;
            }
            for (index; index < mas.length; index = index + 2) {
                vm.outputNumber += mas[index] + mas[index + 1] + '-';
            }
            vm.outputNumber = vm.outputNumber.slice(0, -1)
        }

    };

    function getLen(length) {
        if ((length - parseInt(length / 3) * 3) % 2 == 0) {
            return parseInt(length / 3 - 1);
        } else {
            return parseInt(length / 3 - 2);
        }
    }
})();