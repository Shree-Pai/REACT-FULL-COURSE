function exist(board, word){
    let n = board.length;
    let m = board[0].length;

    function dfs(i, j, k) {
        if (k === word.length) return true; 
        if (i < 0 || j < 0 || i >= n || j >= m) return false;
        if (board[i][j] !== word[k] ) return false;

        let temp = board[i][j];
        board[i][j] = '\0';

        let found = dfs(i+1, j, k+1) ||
                    dfs(i-1, j, k+1) ||
                    dfs(i, j+1, k+1) ||
                    dfs(i, j-1, k+1);

        board[i][j] = temp; 
        return found;
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(dfs(i, j, 0)) return true;
        }
    }

    return false;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
console.log(exist(board, "ABCCED"));

const board1 = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
console.log(exist(board1, "ABCB"));

