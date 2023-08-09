// alert('hello');

// Text Color..
// $('body').css('background','gray')
// Class added by jquery
$('h1').css('color','green');$('h1').addClass('big-title margin-50');
$('button').css('color','red');

// Text manupulating by jQuery

$('p').text('Naeem Hossen').css('color','red').css('fontSize','100px');

$('button').html('<h4>hey </h4>').css('color','blue').css('marginBottom','100px');

// Set attribute and change

$('img').attr('src');
$('a').attr('href','https://bing.com');

// Event listeners //I think event listener like hover
$('p').click(function(){

    $('p').css('color','blue').text('Good Morning from NH');

});

// Vanila Javascript

// for(var i=0;i<5;i++){
//     document.querySelectorAll('button')[i].addEventListener('click',function(){
//         document.querySelector('h1').style.color='purple';
//     })
// }

// jQuery
$('button').click(function(){
    $('h1').css('color','purple');
});

// Adding text by keypress by jQuery 

// $(document).keypress(function(event){
//     $('h1').text(event.key);
// })


// Another option to add a event listeners //neeed to learn dom event and method

$(document).on('mouseover',function(){
    $('p').css('color','green').text('Good Morning from NH');
})