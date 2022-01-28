var selector = document.querySelectorAll("input[type='tel']");
var im = new Inputmask("+7 999 999 99 99");

im.mask(selector);

new JustValidate('.form-section__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        },
    },
});