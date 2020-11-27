var currentYear = new Date().getFullYear();
var yearSelect = document.getElementById("dropdownYear");
for (var i = 0; i < 11; i++) {
  var isSelected = currentYear === currentYear - i;
  yearSelect.options[yearSelect.options.length] = new Option(
    currentYear - i,
    currentYear - i,
    isSelected,
    isSelected
  );
}
