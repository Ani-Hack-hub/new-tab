var bmk = document.getElementById('bookmarks');

function bookmark(name, link){
    var list = document.createElement('li');
    var a = document.createElement('a');
    a.href='https://'+link;
    list.textContent=name;
    list.className='web-item'
    list.appendChild(a);
    bmk.appendChild(list);
}