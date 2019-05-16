alert('JS Linked :)');


1 //
function intProduct(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[arr.length - 1]) {
            let x = arr[i] * arr[i + 1];

            newArr.push(x);
        }
    }
    return Math.max.apply(null, newArr);
}

function intProduct(arr) {

    let max = 0;

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] != arr[arr.length - 1]) {

            let x = arr[i] * arr[i + 1];

            newArr.push(x);


            for (let j = 0; j < newArr.length; j++) {

                if (max < newArr[j]) {

                    max = newArr[j];

                }

            }

        }

    }
    return max;
}

//2.
function uniqueNum(arr) {

    if (arr.length == 0) {

        return "Ok, nothing to deal with";
    }
    let min = Infinity;


    let max = 0;


    let res;


    for (let i = 0; i < arr.length; i++) {


        if (min > arr[i]) {

            min = arr[i];

        }


        if (arr[i] > max) {


            max = arr[i];

        }


    }

    res = max - min - (arr.length - 1);

    return res;
}

//3.
function acronym(str) {


    let arr = [];


    for (let i = 0; i < str.length; i++) {


        if (str[i] == ' ') {


            arr.push(str[i + 1]);

        }

    }

    return str[0].concat(arr.join("")).toUpperCase();

}

4.

function recString(str, num, arr = []) {


    let res = str.slice(0, num);

    arr.push(res);

    if (str.length > num) {


        recString(str.slice(1), num, arr);

    }

    return arr.join();

}