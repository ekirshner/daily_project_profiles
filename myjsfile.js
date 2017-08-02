const parent = document.querySelector("body");

let content = '';

function getinfo() {
    for(let i = 0 ; i < customers.results.length ; i++) {
         content += `
<div>
    <ul>
        <li> <img src="${customers.results[i].picture.large}"</img>  </li> 
        <li> ${customers.results[i].name.first} ${customers.results[0].name.last} </li>
        <li> ${customers.results[i].email} </li>
        <li> ${customers.results[i].location.street} </li>
        <li> ${customers.results[i].location.city} ${customers.results[0].location.postcode} </li>
        <li> ${customers.results[i].phone} </li>
        <li> ${customers.results[i].id.value} </li>
    </ul>
</div>
`
    }
return content;
}

parent.innerHTML = `
<h1 id = "header"> Internal Company Directory </h1>`
 + getinfo();