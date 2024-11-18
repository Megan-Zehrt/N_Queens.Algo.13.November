// 51. N-Queens



// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.





/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {

    let res = [];
    let board = Array.from({ length: n }, () => Array(n).fill('.'));

    const backtrack = (r) => {
        if (r === n) {
            res.push(board.map(row => row.join('')));
            return;
        }
        for (let c = 0; c < n; c++) {
            if (isSafe(r, c, board)) {
                board[r][c] = 'Q';
                backtrack(r + 1);
                board[r][c] = '.';
            }
        }
    }

    backtrack(0);
    return res;
};

function isSafe(r, c, board) {
    for (let i = r - 1; i >= 0; i--) {
        if (board[i][c] === 'Q') return false;
    }
    for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }
    for (let i = r - 1, j = c + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] === 'Q') return false;
    }
    return true;
}