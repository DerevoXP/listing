let pageCounter = 0;
let handbreak = false;

contentGenerator();

$('#maskRight').click(function () {
    if (!handbreak) {
        handbreak = true;
        pageCounter += 2;
        $('#root4').css('transform', 'matrix(0.001, 0, 0, 1, -150, 0)');
        $('#root4').css('background-color', 'grey');
        setTimeout(rightToLeftSecond, 350);
    } else {
        return
    };
});

function rightToLeftSecond() {
    $('#root5').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    $('#root5').css('background-color', 'white');
    setTimeout(contentGenerator, 500);
};

$('#maskLeft').click(function () {
    if (!handbreak) {
        if (pageCounter == 0) { return }
        pageCounter -= 2;
        $('#root3').css('transform', 'matrix(0.001, 0, 0, 1, 150, 0)');
        $('#root3').css('background-color', 'grey');
        setTimeout(leftToRightSecond, 350);
    } else {
        return
    };
});

function leftToRightSecond() {
    $('#root2').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    $('#root2').css('background-color', 'white');
    setTimeout(contentGenerator, 500);
};

function contentGenerator() {

    let root1 = $('<div>');
    root1.attr('id', 'root1');
    let root2 = $('<div>');
    root2.attr('id', 'root2');
    let root3 = $('<div>');
    root3.attr('id', 'root3');
    let root4 = $('<div>');
    root4.attr('id', 'root4');
    let root5 = $('<div>');
    root5.attr('id', 'root5');
    let root6 = $('<div>');
    root6.attr('id', 'root6');

    root1.text(`Страница ${pageCounter - 1}`);
    root2.text(`Страница ${pageCounter}`);
    root3.text(`Страница ${pageCounter + 1}`);
    root4.text(`Страница ${pageCounter + 2}`);
    root5.text(`Страница ${pageCounter + 3}`);
    root6.text(`Страница ${pageCounter + 4}`);

    $('#book').html('');

    $('#book').append(root1);
    $('#book').append(root2);
    $('#book').append(root3);
    $('#book').append(root4);
    $('#book').append(root5);
    $('#book').append(root6);

    handbreak = false;
};