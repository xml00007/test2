// 有一个楼梯，你一次只能往上走一阶或者两阶。请编写函数 climbStairs，它接受一个整数 n 作为参数，表示这个楼梯有多少阶。请你返回一个整数，表示这个楼梯一共有多少种走法。例如：
// climbStairs(1) // => 1
// climbStairs(2) // => 2
// climbStairs(3) // => 3
// climbStairs(10) // => 89

const climbStairs = (n) => {
    // 用一个数组保存每一次的结果
    let arr = new Array(n)
    for (let i = 1; i <= n; i++) {
        if (i < 3) {
            arr[i - 1] = i
        } else {
            // 逐一递推得到结果
            arr[i - 1] = arr[i - 2] + arr[i - 3]
        }
    }
    return n <= 0 ? 0 : arr[n - 1]
}



//动态规划实现所有路径问题
function countPaths(m, n) {
    var ways = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        ways[i] = new Array(n + 1);
    }

    //上方扩展一行，使其值为0
    for (let i = 0; i <= n; i++) {
        ways[0][i] = 0;
    }

    //边上扩展一列，使其值为0
    for (let j = 0; j <= m; j++) {
        ways[j][0] = 0;
    }

    //设置初始值，起点走法为1，只能一步一步走
    ways[1][1] = 1;

    for (let a = 1; a <= m; a++) {
        for (let b = 1; b <= n; b++) {
            if (a === 1 && b === 1) {
                continue;
            }
            //套用状态转换方程
            ways[a][b] = ways[a][b - 1] + ways[a - 1][b];
        }
    }

    return ways[m][n];
}

console.log(countPaths(3, 2)); //3
console.log(countPaths(7, 3)); //28
