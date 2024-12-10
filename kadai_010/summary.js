$(function() {
    //文字色変化ボタンを押すと赤くなる処理
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });
    //文字内容ボタンを押すと「Hello!」になる処理
    $('#change-text').on('click', function() {
        $('#target').text('Hello!');
    });
    //フェードアウトボタンを押すと文字がフェードアウトする処理
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });
    //フェードインボタンを押すと文字がフェードインする処理
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});