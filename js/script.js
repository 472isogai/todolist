/**
 * let ●●● = [];
 * $("●●●")
 * 
$("#●●●").on("click", function () {

});

for (let i = 0; i < ●●●; i++) {

}
 *
 *
 *
 *
 */



// let taskList = [];

// // ローカルストレージからデータとってきて文字→配列に変換
// const tasks = localStorage.getItem('todoText');

// if (tasks !== null) {
//     taskList = JSON.parse(tasks);
//     for(let i = 0; i < taskList.length; i++) {
//         $("#todoList").append(`<li>${taskList[i]}</li>`);
//     }
// }

let taskList = [];

// ローカルストレージからデータとってきて文字→配列に変換
const tasks = localStorage.getItem('todoText');

if (taskList.length > 0){
    taskList = JSON.parse(tasks);
    for(let i = 0; i < taskList.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);   
    $("#todoList").append(`<li>${key}：${value}</li>`);
    }   
}

// // ローカルストレージからデータとってきて文字→配列に変換
// const donetasks = localStorage.getItem('doneText');

// if (doneList.length > 0){
//     doneList = JSON.parse(donetasks);
//     for(let i = 0; i < taskList.length; i++){
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);   
//     $("#doneList").append(`<li>${key}：${value}</li>`);
//     }   
// }

// //ローカルストレージからデータを撮ってきて文字→配列に変換
// if (localStorage.length > 0) {
//     for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     $("#todoList").append(`<li>${key}：${value}</li>`);
//     }
// }

// //追加ボタンを押した時
// $("#addTodoBtn").on("click", function () {
//     //入力されたテキスト情報と時間を取得
//     const todoText = $("#todoText").val();
//     const todoDate = $("#todoDate").val();




// Todoに表示
function display() {
    //ulで紐付け
    let html = '<ul>';
    for (var i = 0; i < localStorage.length; i++) {
        html += '<li class="task-item">' + taskList[i] + ' <button onclick="deleteTodo(' + i + ')">削除</button>' + ' <button onclick="doneTodo(' + i + ')">完了</button></li>';
    }
    html += '</ul>';
    $("#todoList").html(html);
}

// //deleteTodo関数の設定*上手く反応しない
// function deleteTodo(index) {
//     taskList.splice(index, 1);
//     localStorage.setItem('todoText', JSON.stringify(taskList));
// }

// //doneTodo関数の設定*上手く反応しない
// function doneTodo(index) {
//     let taskItem = taskList[index];
//     let taskList = JSON.parse(localStorage.getItem('todoText')) || [];
//     taskList.push(taskItem);
//     localStorage.setItem('todoText', JSON.stringify(taskList));
// }

// 追加ボタン押したとき
$('#addTodoBtn').on('click',function(){
    // 入力されたテキスト情報を取得
    const todoText = $('#todoText').val();
    if(todoText.length > 0){
        taskList.push(todoText);
        localStorage.setItem('todoText', JSON.stringify(taskList));
        display();
    //削除
    $('#todoText').val('');
    }
});


//削除ボタンを押した時
$('#deleteTodoBtn').on('click',function(){
    //localStorageのデータを全部削除
    localStorage.clear();    
    //画面上のタスク情報を全部削除
    $('#todoList').empty();
    // 配列の中身を空にする
    taskList = [];
    $('#doneList').empty();
});
