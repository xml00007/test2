// 最大公共子串

function lcs(m, n) {
    let max = 0;
    let index = 0;
    let lcsarr = new Array(m.length + 1);
    for (let i = 0; i < m.length + 1; i++) {
        lcsarr[i] = new Array(n.length + 1);
        for (let j = 0; j < n.length + 1; j++) {
            lcsarr[i][j] = 0;
        }
    }
    debugger;
    for (let i = 0; i <= m.length; i++) {
        for (let j = 0; j <= n.length; j++) {

            if (i == 0 || j == 0) {
                // lcsarr[i][j] = 0;
            } else {
                if (m[i - 1] == n[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    // lcsarr[i][j] = 0;
                }
            }

            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    // console.log(lcsarr);
    // console.log(max);
    // console.log(index);
    let str = "";
    if (max == 0) {
        return;
    } else {
        for (let i = index - max; i < index; i++) {
            str += m[i];
        }
        return str;
    }
}


let m = "asddcffdfa1234567",
    n = "as113344dcffdfaa1234567";

console.log(lcs(m, n));
