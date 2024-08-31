function updateListbox(text) {
    var listbox = document.getElementById('listbox');
    var option = document.createElement('option');
    option.text = text;
    listbox.add(option);
}
