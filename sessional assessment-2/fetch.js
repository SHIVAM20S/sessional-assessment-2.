const getBtn = document.getElementById('get-btn');
document.getElementById('get-btn').addEventListener('click',loadJSON)
function loadJSON(){
    fetch ('json.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let html=' ';
        data.foreach(function(data){
            html += `
            <li>${data,name} ${data, website}</li>
            `;

        });
        document.getElementById('result').innerhtml=html;
    })
}