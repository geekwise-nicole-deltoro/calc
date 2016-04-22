var calc_number_buttons;
var calc_operator_buttons;
var calc_body;
var answer_container;
var top_container;
var top_container_buttons;
var numbers_container;
var operator_container;
var input_element;


top_container_buttons = [
    
    'CE'
    
    
];



calc_number_buttons = [
    
    4,
    3,
    2,
    1,
    0,
    
];


calc_operator_buttons = [
    
    '*',
    '-',
    '+',
    
    
    
];


calc_body = document.createElement('div');
calc_body.style.backgroundColor = 'navy blue';
calc_body.style.width = '325px';
calc_body.style.height = '465px';
calc_body.style.borderRadius = '5px';
calc_body.style.display = 'inline-block';
calc_body.style.boxShadow = '2px 2px 2px grey';


input_element = document.createElement('input');
input_element.setAttribute('id,' 'answer_container');
input_element.setAttribute('placeholder', '0');


    top_container = document.createElement('div');
    top_container.setAttribute('id','top_container');

    numbers_container = document.createElement('div');
    numbers_container.setAttribute('id','numbers_container');


    operators_container = document.createElement('div');
    operators_container.setAttribute('id', operators_container);

    delete_button = document.createElement('button');
    delete_button.setAttribute('id', 'delete_button');

var create_top_buttons_elements = functions(top_button_element_type,top_button_element_id);



    var top_button_element = document.createElement()=