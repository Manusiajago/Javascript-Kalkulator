function insertData(i) {
    document.form.view.value = document.form.view.value + i;
}

// function clearData() {
//     const input = document.querySelector('#display');

//     if (input.value == "") {
//         alert('masukkan angka nya terlebih dahulu')
//     } else {
//         input.value = "";
//     }
// }

function clearData() {
    const input = document.getElementById('display')

    if (input.value == '') {
        alert('masukkan angka terlebih dahulu')
    } else {
        input.value = '';
    }
}

// function aqual() {
//     const input = document.getElementById('display')

//     if (input.value == '') {
//         alert('masukkan angka terlebih dahulu')
//     } else {
//         input.value = eval(input.value)
//     }
// }


// fungsi eval() di javascript untuk menjumlahkan semua tipe operator aritmatika
function aqual() {
    const input = document.getElementById('display');

    if (input.value == "") {
        alert('masukkan angka terlebih dahulu')
    } else {
        input.value = eval(input.value);
    }
}

// fungsi delete data
function deleteData() {
    const input = document.getElementById('display')

    if (input.value == "") {
        alert('kolom ini kosong tidak bisa dihapus')
    } else {
        input.value = input.value.substring(0, input.value.length - 1);
    }
}