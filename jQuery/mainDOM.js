/*let dom = {
        'btn': document.querySelector('button'),
        'output': document.querySelector('.output')
    }
    /*$('button').click(
        function (event){
            dom.output.innerHTML="";
        }
    )*/
output = $('.outpuut');
$('button').click(function(event) {
    $('.output').empty();
})