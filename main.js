document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById('root');
    const btnAdd = document.querySelector('.btn-add');
    const addCounterInput = document.getElementById('addCounterInput');

    btnAdd.addEventListener('click', () => {
        const count = parseInt(addCounterInput.value); // รับค่าจำนวน Counter จาก input
        for (let i = 0; i < count; i++) {
            addCounter();
        }
    });

    function createCounter() {
        let countNum = 0;

        const makeElement = (tag, attr_n, attr_v, content) => {
            let output = document.createElement(tag);
            output.setAttribute(attr_n, attr_v);
            output.textContent = content;
            return output;
        }

        const updateCounter = (n) => {
            if (countNum + n < 0) {
                return;
            }
            countNum += n;
            number.textContent = countNum;

            // อัพเดทผลรวมทั้งหมดเมื่อมีการเปลี่ยนแปลงใน Counter
            updateSum(); // เรียกใช้ฟังก์ชันคำนวณผลรวม
        }

        const delCounter = (e) => {
            const currentNum = +number.textContent;
            updateSum(-currentNum); // ลบค่าปัจจุบันออกจากผลรวมทั้งหมด

            e.target.closest('.counter').remove();
        }

        const counter = makeElement('div', 'class', 'counter', '');
        const btnInc = makeElement('button', 'class', 'btn-inc', '+');
        const number = makeElement('h3', 'class', 'number', '0');
        const btnDec = makeElement('button', 'class', 'btn-dec', '-');
        const btnClr = makeElement('button', 'class', 'btn-clr', '0');
        const btnDel = makeElement('button', 'class', 'btn-del', 'X')

        btnInc.addEventListener('click', () => updateCounter(1));
        btnDec.addEventListener('click', () => updateCounter(-1));
        btnClr.addEventListener('click', () => {
            updateCounter(-countNum);
        });
        btnDel.addEventListener('click', delCounter);

        counter.appendChild(btnInc);
        counter.appendChild(number);
        counter.appendChild(btnDec);
        counter.appendChild(btnClr);
        counter.appendChild(btnDel);

        return counter;
    }

    function addCounter() {
        root.appendChild(createCounter());
        updateSum(); // เพิ่มการเรียกใช้ฟังก์ชันคำนวณผลรวมเมื่อเพิ่ม Counter
    }

    function updateSum() {
        const counters = document.querySelectorAll('.counter');
        let sum = 0;
        counters.forEach(counter => {
            sum += parseInt(counter.querySelector('.number').textContent);
        });
        document.querySelector('h1').textContent = `Counter Total: ${sum}`;
    }
});