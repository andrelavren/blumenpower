var obj = [];

var blocks = document.querySelectorAll('.coffe');

for (var key=0; key<blocks.length; key++) {
    var block = blocks[key];

    var vol = block.querySelector('input[type="radio"]').value;
    console.log(block, vol);

    obj.push({
        v1: '1',
        v2: '2'
    });
}

console.log(obj);

var container = document.querySelector('.coffe-container');

var pattern = document.querySelector('.coffe');
pattern.parentNode.removeChild(pattern);

container.appendChild(pattern.cloneNode(true));

var addBlock = document.querySelector('#cof_2');
addBlock.addEventListener('click', function() {
    console.log(111);
    container.appendChild(pattern.cloneNode(true));
})